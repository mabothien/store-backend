import db from '../database';
export type Order = {
  id?: string;
  status: string;
  user_id: string;
  quantity: number;
  product_id: number;
};

class OrderModel {
  async create(
    status: string,
    quantity: number,
    userId: string,
    productId: string,
  ): Promise<Order> {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public.orders(status, user_id, quantity, product_id) VALUES($1, $2, $3, $4) RETURNING *';
      const result = await conn.query(sql, [
        status,
        userId,
        quantity,
        productId,
      ]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(
        `Could not order with product id: ${productId}: ${error}`,
      );
    }
  }

  async getOrderById(user_id: number): Promise<Order> {
    try {
      const sql = `SELECT * FROM public.orders
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [user_id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find order ${user_id}, ${(error as Error).message}`,
      );
    }
  }

  async getAll(): Promise<Order[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * from public.orders';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at ${(error as Error).message}`);
    }
  }
}

export default OrderModel;

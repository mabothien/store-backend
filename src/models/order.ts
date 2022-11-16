import db from '../database';
export type Order = {
  id?: string;
  status: string;
  user_id: string;
  quantity: number;
};

class OrderModel {
  async create(
    status: string,
    quantity: number,
    userId: string,
  ): Promise<Order> {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public.orders(status, user_id, quantity) VALUES($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [status, userId, quantity]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Could not order with user id: ${userId}: ${error}`);
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

  async update(u: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE public.orders
                    SET status=$1
                    WHERE id=$2
                    RETURNING id, status`;
      const result = await connection.query(sql, [u.status, u.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Update order fail, ${(error as Error).message}`);
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM public.orders
                    WHERE id=($1)
                    RETURNING id, name`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Delete order fail, ${(error as Error).message}`);
    }
  }
}

export default OrderModel;

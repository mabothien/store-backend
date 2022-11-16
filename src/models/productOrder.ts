import { PoolClient } from 'pg';
import db from '../database';
export type ProductOrder = {
  orderId: number;
  productId: number;
  quantity: number;
};

class ProductOrderModel {
  async create(product: ProductOrder): Promise<ProductOrder> {
    try {
      const conn = await db.connect();
        const sql = `INSERT INTO public.product_order (orderId, productId, quantity)
                  values ($1, $2, $3)
                  RETURNING orderId`;
      const result = await conn.query(sql, [product.orderId, product.productId, product.quantity]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to add product: ${(error as Error).message}`);
    }
  }
}
export default ProductOrderModel;

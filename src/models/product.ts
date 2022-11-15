import db from '../database';
export type Product = {
  id?: string;
  name: string;
  price: number;
};

class ProductModel {
  async index(): Promise<Product[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM public.product';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Error at retrieving Products ${(error as Error).message}`,
      );
    }
  }
  //get Product by id
  async show(id: string): Promise<Product> {
    try {
      const sql = `SELECT * FROM public.product 
      WHERE id=($1)`;
      const conn = await db.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Product ${id} was not found, ${(error as Error).message}`,
      );
    }
  }
  async create(product: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO public.product (name, price) 
                  values ($1, $2) 
                  RETURNING name, price`;
      const result = await connection.query(sql, [product.name, product.price]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create product with (${product.name}): ${
          (error as Error).message
        }`,
      );
    }
  }

  async update(u: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE public.product 
                    SET name=$1, price=$2, 
                    WHERE id=$3
                    RETURNING id, name, price`;
      const result = await connection.query(sql, [u.name, u.price, u.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Update product fail, ${(error as Error).message}`
      );
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM public.product 
                    WHERE id=($1) 
                    RETURNING id, name`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Delete user fail, ${(error as Error).message}`
      );
    }
  }
}

export default ProductModel;

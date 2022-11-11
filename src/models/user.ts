import db from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

class UserModel {
  async index(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * from public.user';
      const result = await connection.query(sql);
      connection.release();
      console.log(result);
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving users ${(error as Error).message}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public.user (firstName, lastName , username, password) VALUES($1, $2, $3, $4) RETURNING *';
      const saltRounds = bcrypt.genSaltSync(
        process.env.SALT_ROUND as unknown as number,
      );
      const hash = bcrypt.hashSync(u.password, parseInt(saltRounds));

      const result = await conn.query(sql, [
        u.firstName,
        u.lastName,
        u.username,
        hash,
      ]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`unable create user (${u.username}): ${err}`);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const sql = `SELECT * FROM public.user
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find product ${id}, ${(error as Error).message}`,
      );
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await db.connect();
    const sql = 'SELECT password FROM public.users WHERE username=($1)';

    const result = await conn.query(sql, [username]);

    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
    }

    return null;
  }
}
export default UserModel;

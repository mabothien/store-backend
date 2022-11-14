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
      const sql = 'SELECT * from public."user"';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving user ${(error as Error).message}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public."user" ("firstName", "lastName" , username, password) VALUES($1, $2, $3, $4) RETURNING *';
      const saltRounds = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(u.password, parseInt(saltRounds));
      const result = await conn.query(sql, [
        u.firstName,
        u.lastName,
        u.username,
        hashedPassword,
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
      const sql = `SELECT * FROM public."user"
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find user: ${id}, ${(error as Error).message}`,
      );
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const connection = await db.connect();

      const sql = 'SELECT password FROM public."user" WHERE username=$1';
      const result = await connection.query(sql, [username]);
      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password, user.password)) {
          const userInfo = await connection.query(
            'SELECT username, "firstName", "lastName" FROM public."user" WHERE username=($1)',
            [username]
          );
          return userInfo.rows[0];
        }
      }
      connection.release();
      return null;
    } catch (error) {
      throw new Error(`Error: ${(error as Error).message}`);
    }
  }
}
export default UserModel;

import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const pool = new Pool({
  user: String(POSTGRES_USER),
  host: String(POSTGRES_HOST),
  database: String(POSTGRES_DB),
  password: String(POSTGRES_PASSWORD),
  port: Number(POSTGRES_PORT),
});

pool.on('error', (error: Error) => {
  console.error(`Error: ${error.message}`);
});

export default pool;

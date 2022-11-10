import express, { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

const corsOptions = { credentials: true, origin: true };
dotenv.config();
const app: Application = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.json());

const server = app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default server;

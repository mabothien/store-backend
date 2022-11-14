import express, { Application } from 'express';
import dotenv from 'dotenv';
import apiRoute from './routers/api';
import bodyParser from 'body-parser';
import errorHandler from './middleware/errorHandler';
import cors from 'cors';

const corsOptions = { credentials: true, origin: true };
dotenv.config();
const app: Application = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api', apiRoute);

const server = app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default server;

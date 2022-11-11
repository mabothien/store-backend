import { Router } from 'express';

import userRoutes from './user';
import orderRoutes from './order';

const routes = Router();
routes.use('/user' ,userRoutes);
routes.use('/order', orderRoutes);

export default routes;

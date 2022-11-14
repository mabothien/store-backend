import { Router } from 'express';

import userRoutes from './user';
import orderRoutes from './order';
import productRoutes from './product';

const routes = Router();
routes.use('/user', userRoutes);
routes.use('/order', orderRoutes);
routes.use('/product', productRoutes);

export default routes;

import { Router } from 'express';

import userRoutes from './user';
import orderRoutes from './order';
import productRoutes from './product';
import productOrderRoutes from './productOrder';

const routes = Router();
routes.use('/user', userRoutes);
routes.use('/order', orderRoutes);
routes.use('/product', productRoutes);
routes.use('/productOrder', productOrderRoutes);

export default routes;

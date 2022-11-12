import { Router } from 'express';
import * as handlers from '../../handlers/order';
import validateToken from '../../middleware/validateToken';

const orderRoutes = Router();
// api/order
orderRoutes.route('/').post(handlers.create);
orderRoutes.route('/').get(validateToken, handlers.getAll);
orderRoutes.route('/:id').get(validateToken, handlers.getOrderById);

export default orderRoutes;

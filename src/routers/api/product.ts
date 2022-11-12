import { Router } from 'express';
import * as handlers from '../../handlers/product';
import validateToken from '../../middleware/validateToken';

const productRoutes = Router();
// api/order
productRoutes.route('/').post(validateToken, handlers.create);
productRoutes.route('/').get(handlers.index);
productRoutes.route('/:id').get(handlers.show);

export default productRoutes;

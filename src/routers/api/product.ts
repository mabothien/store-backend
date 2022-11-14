import { Router } from 'express';
import * as handlers from '../../handlers/product';
import validateToken from '../../middleware/validateToken';

const productRoutes = Router();
productRoutes.route('/').get(handlers.index);
productRoutes.route('/:id').get(handlers.show);
productRoutes.route('/create').post(validateToken, handlers.create);

export default productRoutes;

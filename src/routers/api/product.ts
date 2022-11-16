import { Router } from 'express';
import * as handlers from '../../handlers/product';
import validateToken from '../../middleware/validateToken';

const productRoutes = Router();
productRoutes.route('/create').post(validateToken, handlers.create);
productRoutes.route('/').get(handlers.index);
productRoutes.route('/:id').get(handlers.show);
productRoutes.route('/:id').patch(validateToken, handlers.deleteById);
productRoutes.route('/id').delete(validateToken, handlers.updateById);

export default productRoutes;

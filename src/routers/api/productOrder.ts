import { Router } from 'express';
import * as handlers from '../../handlers/productOrder';
import validateToken from '../../middleware/validateToken';

const productOrderRoutes = Router();
productOrderRoutes
  .route('/create')
  .post(validateToken, handlers.addProductToOrder);

export default productOrderRoutes;

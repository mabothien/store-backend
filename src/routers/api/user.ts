import { Router } from 'express';
import * as handlers from '../../handlers/user';
import validateToken from '../../middleware/validateToken';

const userRoutes = Router();
userRoutes.route('/').post(validateToken,handlers.create);
userRoutes.route('/').get(validateToken,handlers.getAll,);
userRoutes.route('/:id').get(validateToken,handlers.getUserById);
userRoutes.route('/auth').post(handlers.authenticate);

export default userRoutes;

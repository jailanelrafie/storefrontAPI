import {Router} from 'express';
import * as handlers from '../../handlers/users';
import validateToken from '../../middleware/authenticationMiddleware';

const usersRoutes = Router();

usersRoutes.route('/index').get(validateToken, handlers.index);
usersRoutes.route('/create').post(handlers.create);
usersRoutes.route('/show/:id').get(validateToken, handlers.getUserByID);
//usersRoutes.route('/update').patch(validateToken, handlers.updateUser);
//usersRoutes.route('/delete/:id').delete(validateToken, handlers.deleteUser);
//usersRoutes.route('/authenticate').post(handlers.userAuthentication);

export default usersRoutes;

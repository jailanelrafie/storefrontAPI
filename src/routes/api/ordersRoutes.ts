import {Router} from 'express';
import * as handlers from '../../handlers/orders';
import validateToken from '../../middleware/authenticationMiddleware';

const ordersRoutes = Router();

ordersRoutes.route('/create').post(validateToken, handlers.createOrder);
//ordersRoutes.route('/addproduct').post(validateToken, handlers.addProductToOrder);
//ordersRoutes.route('/updatestatus').patch(validateToken, handlers.updateStatus);
ordersRoutes.route('/show/:id').get(validateToken, handlers.getOrderByUserID);
//ordersRoutes.route('/delete/:id').delete(validateToken, handlers.deleteOrder);

export default ordersRoutes;

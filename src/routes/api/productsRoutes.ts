import {Router} from 'express';
import * as handlers from '../../handlers/products';
import validateToken from '../../middleware/authenticationMiddleware';

const productsRoutes = Router();

productsRoutes.route('/index').get(handlers.index);
productsRoutes.route('/create').post(validateToken, handlers.createProduct);
productsRoutes.route('/show/:id').get(handlers.getProductByID);
//productsRoutes.route('/update').patch(handlers.updateProduct);
//productsRoutes.route('/delete/:id').delete(handlers.deleteProduct);

export default productsRoutes;

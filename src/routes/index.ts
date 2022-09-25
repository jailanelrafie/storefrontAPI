import {Router} from 'express';
import usersRoutes from './api/usersRoutes';
import productsRoutes from './api/productsRoutes';
import ordersRoutes from './api/ordersRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);
routes.use('/orders', ordersRoutes);

export default routes;

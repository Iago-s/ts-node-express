import { Router } from 'express';
const routes = Router();

import productRouter from './product.routes';

routes.use('/products', productRouter);

export default routes;
import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';

const productRouter = Router();

const productRepository = new ProductRepository();

productRouter.get('/', (req, res) => {
  return res.json(productRepository.findAll());
});

productRouter.post('/', (req, res) => {

});

export default productRouter;
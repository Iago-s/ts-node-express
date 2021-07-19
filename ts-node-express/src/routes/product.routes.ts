import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();

const productRepository = new ProductRepository();

productRouter.get('/', (req, res) => {
  return res.json(productRepository.findAll());
});

productRouter.post('/', (req, res) => {
  try {
    const { id, code, description, buyPrice, sellPrice, tags, lovers } = req.body;
    const service = new CreateProductService(productRepository);

    const product = service.execute({ id, code, description, buyPrice, sellPrice, tags, lovers });

    return res.status(201).json(product);
  } catch(err) {
    return res.status(400).json({ message: err.message })
  }
});

export default productRouter;
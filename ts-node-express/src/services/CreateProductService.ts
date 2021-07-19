import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

export default class CreateProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute ({
    code,
    description,
    buyPrice,
    sellPrice,
    tags,
    lovers
  }: Product): Product {
    const product = this.repository.findByCode(code);

    if(product) {
      throw Error('Produto já cadastrado');
    } else {
      const newProject= new Product({
        code,
        description,
        buyPrice,
        sellPrice,
        tags,
        lovers,
      });

      this.repository.save(newProject);

      return newProject;
    }
  }
}
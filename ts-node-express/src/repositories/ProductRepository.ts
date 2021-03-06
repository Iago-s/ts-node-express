import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll (): Array<Product> {
    return this.products;
  }

  public findByCode (code: number): Product | undefined {
    return this.products.find(product => product.code === code);
  }

  public save ({description, code, buyPrice, sellPrice, tags, lovers}: Product): Product {
    const product = new Product({ 
      description,
      code,
      buyPrice,
      sellPrice,
      tags,
      lovers
    });

    this.products.push(product);

    return product;
  }
}
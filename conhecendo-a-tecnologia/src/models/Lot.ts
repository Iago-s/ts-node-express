import Product from './Product'

export default class Lot {
  products: Array<Product>;
  date: Date;

  constructor() {
    this.products = [];
    this.date = new Date();
  }

  public addProduct(product: Product) {
    this.products.push(product);
  }
}
import { getProductsAPIDevelopment } from '../services/getProductsAPI.js';
import ProductItem from './ProductItem.js';
import { Navbar, Footer } from './components/index.js';

/**
 * @typedef { import('../../types.d.ts').ProductType } ProductType
 * @typedef { import('../../types.d.ts').ProductResponse } ProductResponse
 */

class ProductList {
  constructor() {
    /** @type {ProductType[]} */
    this.products = [];
  }

  /**
   * Fetch the products from given API.
   * @returns {ProductResponse[]}
   */
  fetchProducts() {
    return getProductsAPIDevelopment();
  }

  async render() {

    const productsResponse = this.fetchProducts();

    productsResponse.forEach(product => {
      this.products.push(product);
    });

    //* Creates HTML Elements.
    const section = `
      <header>${ Navbar() }<header>
      <main id="main" class="container text-white">
        <div class="row" id="row"></div>
      </main>
      <footer>${ Footer('Shop Toc &copy; 2023') }</footer>
    `;

    $("#app").append(section);

    this.products.forEach(product => {
      new ProductItem(product).render();
    });

  }
}

export default ProductList;

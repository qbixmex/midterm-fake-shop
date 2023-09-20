import { getProductsAPIDevelopment } from '../services/getProductsAPI.js';
import ProductItem from './ProductItem.js';

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
    $("#app").append('<ul id="list"></ul>');

    this.products.forEach(product => {
      new ProductItem(product).render();
    });

  }
}

export default ProductList;

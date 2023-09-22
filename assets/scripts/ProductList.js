import { getProductsAPI } from '../services/getProductsAPI.js';
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
  async fetchProducts() {
    return await getProductsAPI();
  }

  /**
   * Renders HTML Product List.
   * @returns {string[]} Product rows
   */
  async render() {

    const productsResponse = await this.fetchProducts();
    
    productsResponse.forEach(product => {
      this.products.push(product);
    });

    let output = '';

    this.products.forEach(product => {
      output += new ProductItem(product).render();
    });

    return output;

  }
}

export default ProductList;

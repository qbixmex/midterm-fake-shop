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
   * Fetch the products from given API
   * and push each to this products array.
   * @returns {void}
   */
  fetchProducts() {
    const productsResponse = getProductsAPIDevelopment();

    productsResponse.forEach(product => {
      this.products.push(product);
    });
  }

  /**
   * Renders HTML Product List.
   * @returns {string[]} Product rows
   */
  render() {

    this.fetchProducts();

    let output = '';

    this.products.forEach(product => {
      output += new ProductItem(product).render();
    });

    return output;

  }
}

export default ProductList;

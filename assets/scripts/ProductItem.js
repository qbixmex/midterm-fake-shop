import Product from './Product.js';
import ShoppingCart from './ShoppingCart.js';
import { Card } from './components/index.js';

/** @typedef {import('../../types').ProductType} ProductType */

class ProductItem {

  /**
   * @param {ProductType} product - Product object.
   */
  constructor({ id, title, price, description, image }) {
    this.product = new Product(id, title, price, description, image);
  }

  //* ===================== METHODS =====================

  /**
   * Adds a product to shopping cart.
   * @returns {string} A successful message.
   */
  static addToCart(product) {
    console.log('Product:', product.title);
  }

  /**
   * Renders product HTML.
   * @returns {string} HTML string.
   */
  render() {
    return `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        ${ Card(this.product) }
      </div>
    `;
  }

}

export default ProductItem;

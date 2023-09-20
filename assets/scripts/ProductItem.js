import Product from './Product.js';
import { formatPrice } from './helpers/format.js';

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
  addToCart() {
    console.log(this.product);
    return 'Product Added to Cart !';
  }

  /**
   * Renders Product Item to the DOM.
   * @returns {void} Jquery will append to proper html element.
   */
  render() {
    $(() => {
      const card = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card mb-4">
            <img src="${this.product.image}" class="card-img-top card-image img-fluid" alt="${this.product.title}">
            <div class="card-body">
              <p class="card-text text-success fw-bold text-end card-price">$ ${formatPrice(this.product.price)}</p>
              <h5 class="card-title">${
                this.product.title.length < 65
                  ? this.product.title
                  : this.product.title.substring(0, 65) + '...'
              }</h5>
              <p class="card-text card-description">${this.product.description.substring(0, 150)} ...</p>
              <div class="d-grid d-lg-block text-lg-end">
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `;

        $('#row').append(card);
    });
  }

}

export default ProductItem;

import ProductItem from '../ProductItem.js';
import { formatPrice } from '../helpers/format.js';
/** @typedef { import('../../../types.js').ProductType } ProductType */

/**
 * Card component.
 * @param {ProductType} product
 * @returns {string} HTML string.
 */
const Card = (product) => {
  return `
    <div class="card mb-4">
      <img src="${product.image}" class="card-img-top card-image img-fluid" alt="${product.title}">
      <div class="card-body">
        <p class="card-text text-success fw-bold text-end card-price">$ ${formatPrice(product.price)}</p>
        <h5 class="card-title">${
          product.title.length < 65
            ? product.title
            : product.title.substring(0, 65) + '...'
        }</h5>
        <p class="card-text card-description">${product.description.substring(0, 150)} ...</p>
        <div class="d-grid d-lg-block text-lg-end">
          <button id="product-${product.id}" class="btn btn-primary btn-add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
};

export default Card;
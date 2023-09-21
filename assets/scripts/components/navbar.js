import { formatPrice } from "../helpers/format.js";

/**
 * Top Navbar Component.
 * @param {number} total the cart total price.
 * @returns {string} HTML string.
 */
const Navbar = (total = 0) => {
  return `
    <nav class="navbar bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Shop Toc</a>
        <section class="navbar-text text-white cart-total">
          <span>Total:</span>&nbsp;
          <span id="total-price" class="fw-bold text-primary">$ ${formatPrice(total)}</span>
        </section>
      </div>
    </nav>
  `;
};

export default Navbar;
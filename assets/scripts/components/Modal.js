import { formatPrice } from "../helpers/format.js";
import { Alert } from './index.js';

export const ProductRows = (cart) => {
  return cart.items.map(item => {
    return `
      <tr>
        <td>
          <img
            class="img-fluid"
            src="${item.image}"
            alt="${item.title}"
            width="50"
          />
        </td>
        <td>${item.title}</td>
        <td class="text-success fw-bold text-end">$ ${item.price}</td>
      </tr>
    `;
  });
};

export const Modal = (cart) => {
  return `
    <div class="modal fade" id="summary" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Summary</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div><!-- modal-header -->
          <div class="modal-body">
            <table class="table table-hover table-responsive">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th class="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                ${
                  (ProductRows(cart).length > 0)
                    ? ProductRows(cart).join('')
                    : `<tr><td colspan="3"><div class="mt-3">${Alert("There's no products added yet !", 'warning')}</div></td></tr>`
                }
              </tbody>
            </table>
            <p id="cart-price" class="fw-bold text-end">Total: <span class="text-success">$ ${formatPrice(cart.total)}</span></p>
          </div><!-- modal-body -->
          <div class="modal-footer">
            <button id="clear-cart" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Clear Cart</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
          </div><!-- modal-footer -->
        </div><!-- modal-content -->
      </div><!-- modal-dialog -->
    </div><!-- modal -->
  `;
};

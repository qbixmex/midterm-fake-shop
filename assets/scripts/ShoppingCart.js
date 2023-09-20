class ShoppingCart {

  constructor() {
    this.items = [109.95, 22.30, 55.99, 168.00, 55.99];
    this.total = 0;
  }

  /**
   * Calculate the total price of the items in the cart.
   * @returns {number} The total price.
   */
  getTotal() {
    if (this.items.length > 0) {
      this.total = this.items.reduce((previousPrice, currentPrice) => {
        return previousPrice + currentPrice;
      }, 0);
    }
    return this.total;
  }

  /**
   * Render the total and a button
   */
  render() {
    $("#header").append(Navbar(this.price));
  }

}

export default ShoppingCart;

const shoppingCart = new ShoppingCart();

shoppingCart.getTotal();
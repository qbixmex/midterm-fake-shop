/**
 * Footer component.
 * @param {string} text Footer text like copyright.
 * @returns {string} HTML string.
 */
const Footer = (text) => {
  return `
    <nav class="navbar bg-dark sticky-bottom">
      <div class="container-fluid d-flex justify-content-center py-3">
        <p class="m-0 text-light">${text}</p>
      </div>
    </nav>
  `;
};

export default Footer;
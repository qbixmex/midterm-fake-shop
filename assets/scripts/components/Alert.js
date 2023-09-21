/**
 * Alert for notifications
 * @param {string} message Custom alert message.
 * @param {'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'} color Alert snippet color.
 * @returns 
 */
const Alert = (message, color = 'info') => {
  return `
    <section id="alert" class="alert alert-${color} text-center fw-bold">
      ${message}
    </section>
  `;
};

export default Alert;
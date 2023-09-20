/**
 * Formats to a currency.
 * @param {number} value - Number to format.
 * @returns {number}
 */
export const formatPrice = (value) => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
};

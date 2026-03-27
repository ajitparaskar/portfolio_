/**
 * Truncates text to a specified maximum length, appending an ellipsis if necessary.
 * @param {string} text - The input string.
 * @param {number} maxLength - Maximum character allowance.
 * @returns {string} Truncated text.
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return ''
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

/**
 * Formats a given string to standard Title Case.
 * @param {string} text - The input string.
 * @returns {string} Title-cased text.
 */
export const formatText = (text) => {
  if (!text) return ''
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

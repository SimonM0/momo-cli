/**
 * Capitalises the first letter of a word
 *
 * @param {string} word - word to capitalise
 * @returns {string} - capitalised word
 */
const capitaliseWord = word => `${
  word.charAt(0)
    .toUpperCase()
}${
  word.substr(1)
}`;

module.exports = capitaliseWord;

const numberToWords = require("number-to-words");

module.exports = function toReadable(number) {
  return numberToWords.toWords(number).replace(/-/g, ' ');
}

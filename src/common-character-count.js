const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const common = [];
  let copyS2 = s2;
  s1.split("").forEach((char) => {
    if (copyS2.includes(char)) {
      common.push(char);
      const index = copyS2.indexOf(char);
      copyS2 = copyS2.slice(0, index) + copyS2.slice(index + 1);
    }
  });
  return common.length;
}

module.exports = {
  getCommonCharacterCount,
};

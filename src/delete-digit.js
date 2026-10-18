const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('');

  return Math.max(...str.map((digit, index) => {
    const left = str.slice(0, index);
    const right = str.slice(index + 1, str.length);
    return Number(left.join('') + right.join(''));
  }));
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.map((row) => row.reduce((count, item) => item === '^^' ? count + 1 : count, 0)).reduce((count, item) => count + item, 0);
}

module.exports = {
  countCats
};

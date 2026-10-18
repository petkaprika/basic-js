const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    arr.forEach((item) => {
      let depth = 1;

      if (Array.isArray(item)) {
        depth += this.calculateDepth(item);

        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    });
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = arr.map((value, index) => ({
    value,
    sourceIndex: index,
    isOriginal: true,
  }));

  const controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  for (let i = 0; i < arr.length; i += 1) {
    const command = arr[i];

    if (!controls.includes(command)) {
      continue;
    }

    const commandPosition = result.findIndex(
      (item) => item.isOriginal && item.sourceIndex === i,
    );

    if (commandPosition === -1) {
      continue;
    }

    const isNext = command.endsWith("next");
    const targetIndex = isNext ? i + 1 : i - 1;

    const targetPosition = result.findIndex(
      (item) => item.isOriginal && item.sourceIndex === targetIndex,
    );

    if (targetPosition === -1) {
      result.splice(commandPosition, 1);
      continue;
    }

    switch (command) {
      case "--discard-next":
      case "--discard-prev": {
        const positions = [commandPosition, targetPosition].sort(
          (a, b) => b - a,
        );

        positions.forEach((position) => result.splice(position, 1));
        break;
      }

      case "--double-next":
      case "--double-prev": {
        result.splice(commandPosition, 1);

        const updatedTargetPosition = result.findIndex(
          (item) => item.isOriginal && item.sourceIndex === targetIndex,
        );

        const duplicate = {
          ...result[updatedTargetPosition],
          isOriginal: false,
        };

        const insertPosition =
          command === "--double-next"
            ? updatedTargetPosition + 1
            : updatedTargetPosition;

        result.splice(insertPosition, 0, duplicate);
        break;
      }
    }
  }
  return result.map((item) => item.value);
}

module.exports = {
  transform,
};

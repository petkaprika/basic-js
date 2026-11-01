const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    const link = arguments.length === 0 ? "" : String(value);

    this.chain.push(link);

    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    const result = this.chain.map((value) => `( ${value} )`).join("~~");

    this.chain.length = 0;

    return result;
  },
};

module.exports = {
  chainMaker,
};

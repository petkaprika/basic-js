const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  if (options) {

    if (options.separator === undefined) {
      options.separator = '+';
    }

    if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
    }

    if (typeof options.separator !== 'string') {
      options.separator = String(options.separator);
    }

    if (typeof options.additionSeparator !== 'string') {
      options.additionSeparator = String(options.additionSeparator);
    }

    if (options.addition !== undefined && typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    }

    let addition;
    if (options.additionRepeatTimes && options.addition !== undefined) {
      addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    } else if (options.addition !== undefined) {
      addition = options.addition;
    } else {
      addition = '';
    }

    if (options.repeatTimes) {
      return (str + addition + options.separator).repeat(options.repeatTimes - 1) + str + addition;
    } else {
      return str + addition;
    }
  }

  else {
    return str;
  }
}

module.exports = {
  repeater
};

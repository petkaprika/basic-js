const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(encryptedMessage, key, false);
  }

  process(message, key, isEncrypt) {
    const text = message.toUpperCase();
    const keyword = key.toUpperCase();
    let keyIndex = 0;

    let result = "";

    for (const char of text) {
      if (char >= "A" && char <= "Z") {
        const textCode = char.charCodeAt(0) - 65;
        const keyCode = keyword.charCodeAt(keyIndex % keyword.length) - 65;

        const shift = isEncrypt ? keyCode : -keyCode;
        const newCode = (textCode + shift + 26) % 26;

        result += String.fromCharCode(newCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : [...result].reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

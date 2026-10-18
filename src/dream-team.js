const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const name = [];

  if (Array.isArray(members)) {
    members.forEach((member) => {
      if (typeof member === 'string') {
        const nameTrim = member.trim();
        if (nameTrim) {
          name.push(nameTrim[0].toUpperCase());
        }
      }
    });

    return name.sort().join('');
  }

  return false;
}

module.exports = {
  createDreamTeam
};

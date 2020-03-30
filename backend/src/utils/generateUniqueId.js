const crypto = require('crypto');

module.exports = function generateUniquedId() {
  return crypto.randomBytes(4).toString('HEX');
};

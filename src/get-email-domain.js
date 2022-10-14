const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let res = email.substring(email.indexOf('@') + 1);
  if (res.indexOf('@') != -1) {
    let deepRes = res.substring(res.indexOf('@') + 1);
    return deepRes;
  }
  return res;
 }
 getEmailDomain("prettyandsimple@example.com");

module.exports = {
  getEmailDomain
};

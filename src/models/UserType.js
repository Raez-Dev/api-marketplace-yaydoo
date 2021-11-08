const Base  = require('./Base');

class UserType extends Base {
  static get tableName() {
    return 'userType';
  }
}
module.exports = UserType;
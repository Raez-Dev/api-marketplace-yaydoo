const Base = require('./Base');

class Brand extends Base {
  static get tableName() {
    return 'brand';
  }
}
module.exports = Brand;

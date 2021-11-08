const Base  = require('./Base');

class Category extends Base {
  static get tableName() {
    return 'category';
  }
}
module.exports = Category;
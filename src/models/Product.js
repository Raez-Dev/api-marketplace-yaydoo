const Base  = require('./Base');

class Product extends Base {
  static get tableName() {
    return 'product';
  }

  static get relationMappings() {
    const User = require('./User');
    const Category = require('./Category');
    const Brand = require('./Brand');
    return {
      user: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'product.userId',
          to: 'user.id',
        },
      },
      brand: {
        relation: Base.HasOneRelation,
        modelClass: Brand,
        join: {
          from: 'product.brandId',
          to: 'brand.id',
        },
      },
      category: {
        relation: Base.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'product.categoryId',
          to: 'category.id',
        },
      },
    };
  }
}
module.exports = Product;

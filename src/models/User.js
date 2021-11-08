const Base  = require('./Base');

class User extends Base {
  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
    const UserType = require('./UserType'); 
    return {
      userType: {
        relation: Base.HasOneRelation,
        modelClass: UserType,
        join: {
          from: 'user.userTypeId',
          to: 'userType.id',
        },
      },
    };
  }
}
module.exports = User;

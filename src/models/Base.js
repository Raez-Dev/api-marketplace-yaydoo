const { Model } = require('objection');
const path = require('path');
const setupDb = require('../db/db-setup');

setupDb();

class Base extends Model {
    static get modelPaths(){
        return [path.resolve('src/models')];
      }
  }
  module.exports = Base;
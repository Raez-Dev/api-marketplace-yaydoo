const knex = require('knex');
const knexfile = require('../../knexfile');
const { Model } = require('objection');
const config = require('../config/');

function setupDb() {
    const db = knex(knexfile[config.env]);
    Model.knex(db);
}

module.exports = setupDb;
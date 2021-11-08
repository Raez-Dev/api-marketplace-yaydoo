// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'marketplace-yaydoo',
      user: 'postgres',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations',
    },
    seeds: {                // Initial data
      directory: './src/db/seeds',
    },
    ...knexSnakeCaseMappers, // To format
  },

};
// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection');
const config = require('./src/config');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: config.dbDatabase,
      user: config.dbUser,
      password: config.dbPassword,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations',
    },
    seeds: {
      // Initial data
      directory: './src/db/seeds',
    },
    ...knexSnakeCaseMappers, // To format
  },
  production: {
    client: 'postgresql',
    connection: config.dbUrl,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations',
    },
    seeds: {
      // Initial data
      directory: './src/db/seeds',
    },
    ...knexSnakeCaseMappers, // To format
  },
};

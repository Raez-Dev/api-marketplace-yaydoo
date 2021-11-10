// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection');
const config = require('./src/config');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: config.dbHost,
      port: config.port,
      database: config.dbDatabase,
      user: config.dbUser,
      password: config.password,
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
    connection: {
      host: config.dbHost,
      port: config.port,
      database: config.dbDatabase,
      user: config.dbUser,
      password: config.password,
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
};

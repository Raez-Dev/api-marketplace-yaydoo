exports.up = function (knex) {
  return knex.schema
    .createTable('userType', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('fullName').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table
        .integer('userTypeId')
        .notNullable()
        .references('id')
        .inTable('userType');
      table.timestamps(true, true);
    })
    .createTable('category', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('brand', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('product', (table) => {
      table.increments();
      table.string('name').notNullable().unique();
      table.string('image', 400).notNullable();
      table.string('sku').notNullable();
      table.integer('quantity').notNullable();
      table.double('price').notNullable();
      table
        .integer('categoryId')
        .notNullable()
        .references('id')
        .inTable('category');
      table.integer('brandId').notNullable().references('id').inTable('brand');
      table.integer('userId').notNullable().references('id').inTable('user');
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('product')
    .dropTableIfExists('user')
    .dropTableIfExists('userType')
    .dropTableIfExists('category')
    .dropTableIfExists('brand');
};

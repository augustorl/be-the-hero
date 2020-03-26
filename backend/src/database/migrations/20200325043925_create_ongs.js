/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// eslint-disable-next-line space-before-function-paren
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

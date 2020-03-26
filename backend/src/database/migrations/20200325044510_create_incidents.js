/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line space-before-function-paren
exports.up = function(knex) {
  // eslint-disable-next-line space-before-function-paren
  return knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};

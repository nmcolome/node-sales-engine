
exports.up = function(knex) {
  return knex.schema
  .createTable('customers', function(table) {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');

    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers')
};

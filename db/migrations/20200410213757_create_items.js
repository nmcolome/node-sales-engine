
exports.up = function(knex) {
  return knex.schema
    .createTable('items', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.integer('unit_price');
      table.integer('merchant_id').unsigned();
      table.foreign('merchant_id').references('merchants.id')

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items')
};


exports.up = function(knex) {
  return knex.schema
    .createTable('invoices', function(table) {
      table.increments('id').primary();
      table.integer('customer_id').unsigned();
      table.foreign('customer_id').references('customers.id');
      table.integer('merchant_id').unsigned();
      table.foreign('merchant_id').references('merchants.id');
      table.enu('status', ['shipped', 'pending', 'canceled']);

      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('invoices')
};

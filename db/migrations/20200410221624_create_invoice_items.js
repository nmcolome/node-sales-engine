
exports.up = function(knex) {
  return knex.schema
    .createTable('invoice_items', function(table) {
      table.increments('id').primary();
      table.integer('item_id').unsigned();
      table.foreign('item_id').references('items.id');
      table.integer('invoice_id').unsigned();
      table.foreign('invoice_id').references('invoices.id');
      table.integer('quantity');
      table.integer('unit_price');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('invoice_items')
};

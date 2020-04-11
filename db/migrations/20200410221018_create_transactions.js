
exports.up = function(knex) {
  return knex.schema
    .createTable('transactions', function(table) {
      table.increments('id').primary();
      table.integer('invoice_id').unsigned();
      table.foreign('invoice_id').references('invoices.id');
      table.string('credit_card_number');
      table.date('credit_card_expiration_date');
      table.enu('result', ['success', 'failed']);

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
};

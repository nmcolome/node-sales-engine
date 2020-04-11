const csv = require('csv-parser');
const fs = require('fs');
const filepath = './db/csv/invoice_items.csv';
const data = [];

exports.seed = async function(knex, Promise) {
  knex('invoice_items').del()
  .then(
    fs.createReadStream(filepath)
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(csv())
    .on('data', row => {
      data.push(row);
    })
  )
  await knex('invoice_items')
    .insert(data)
};

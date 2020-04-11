const csv = require('csv-parser');
const fs = require('fs');
const filepath = './db/csv/invoices.csv';
const data = [];

exports.seed = async function(knex, Promise) {
  knex('invoices').del()
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
  await knex('invoices')
    .insert(data)
};

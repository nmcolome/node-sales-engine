const csv = require('csv-parser');
const fs = require('fs');
const filepath = './db/csv/transactions.csv';
const data = [];

exports.seed = async function(knex, Promise) {
  knex('transactions').del()
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
  await knex('transactions')
    .insert(data)
};

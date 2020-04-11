const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Sales Engine';

app.get('/', (req, res) => {
  res.send('Welcome to Sales Engine');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});

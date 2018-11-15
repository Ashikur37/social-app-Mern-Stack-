/* eslint-disable no-console */
const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./app/routes/user.routes.js')(app);

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Successfully connected to the database');
}).catch((err) => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
app.get('/', (req, res) => {
  res.json({ name: 'hello' });
});

app.listen(8080, (err) => {
  if (!err) {
    console.log('app is runnung at port 8080');
  }
});

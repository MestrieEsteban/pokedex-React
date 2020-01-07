const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const api = require('./routes/api');

const app = express()

app.use(cors());

app.use('/api', api);

app.listen(5000, function () {
  console.log(chalk.magenta('Server in listening on port 5000!'))
})
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;
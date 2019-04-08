const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


  var cors = require('cors');

app.use(cors({}));


const mysql = require('mysql');
// connection configurations

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catdog12',
    database: 'spotify'
});

// connect to database
mc.connect();

app.listen(port);

console.log('cors API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route

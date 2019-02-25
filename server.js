﻿require('dotenv').config()
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/customers', require('./customers/customer.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.APP_ENV === 'production' ? (process.env.PORT || 80) : process.env.APP_PORT;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

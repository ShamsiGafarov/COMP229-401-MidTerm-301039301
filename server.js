var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');

require('./config/db');

var carRouter = require('./app/routers/cars');
var indexRouter = require('./app/routers/index');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/api/cars', carRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server running at http://localhost:${port}/`);
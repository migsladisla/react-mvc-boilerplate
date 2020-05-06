const createError = require('http-errors');
const express = require('express');
const exphbs  = require('express-handlebars');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');

const app = express();

// Route
// const usersRouter = require('./app/api/v1/users');

// view engine
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs', partialsDir: path.join(__dirname, './app/views/partials')}));
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'hbs');

// middlewares
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// passport
// app.use(passport.initialize());
// require('./lib/javascript/passport_local');
// require('./lib/javascript/passport_jwt_header')(passport);

// Use routes
// app.use('/api/v1/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
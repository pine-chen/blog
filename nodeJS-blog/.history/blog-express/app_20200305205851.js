var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var blogRouter = require('./routes/blog');
var userRouter = require('./routes/user');
var redisClient = require('./db/redis');

var app = express();

const ENV = process.env.NODE_ENV
if (ENV !== 'production') {
  app.use(logger('dev'));
}else{
  const logFileName = path.join(__dirname, 'logs', 'access.log');
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(logger('combined', {
    stream: writeStream
  }));
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const sessionStore = new redisStore({
  client: redisClient
})

app.use(session({
  secret: 'H*U>do6aB4&',
  resave:false,
  saveUninitialized: true,
  cookie: {
    path: '/',             //默认配置
    httpOnly: true,        //默认配置
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}))


app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

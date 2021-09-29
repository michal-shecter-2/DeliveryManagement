const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
// <<<<<<< HEAD
const uri = "mongodb://localhost:27017/Deliveries";//קישור למונגודיבי

//const uri = "mongodb://localhost:27017/Events";
// >>>>>>> 42d41d2e39b66a8d7bc5e01884aaee7ef21a2350
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
app.use(cors());
const allowedOrigins = ['http://localhost:3001'];
const options = cors.CorsOptions = {
  origin: allowedOrigins
};

const router = express.Router();

const customersRouter = require('./routes/customers');
const adsRouter = require('./routes/ads');
const citiesRouter = require('./routes/cities');
const usersRouter = require('./routes/users');


app.use(logger('dev'));
app.use(express.json());//מאפשר לקבל אוביקטים מסוג json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/customers', customersRouter);
app.use('/ads', adsRouter);
app.use('/cities', citiesRouter);
app.use('/users', usersRouter);



app.use(cors(options))
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;







const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cron = require('node-cron');
const cors = require('cors');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
// <<<<<<< HEAD
const uri = "mongodb://localhost:27017/Deliveries";//קישור למונגודיבי
mongoose.set('debug', true);
const { sendEmail } = require('./sendemail')
 const  {smartagent}  = require('./agent');

 const ads = require("./Model/AdsModel");
cron.schedule('* * * * *  ', () => {
  //כאן נקרא לפונקציה שתהיה בAGENT
  // smartagent();
 getallads();
  console.log('running a task every one minutes');
});

async function getallads()  {
  try {
      const ad = await ads.find({})
          .populate([{
              path: "usercode",
              select: {
                  firstname: 1,
                  lastname: 1,
                  email: 1,
                  phone: 1,
                  mobilephone: 1
              }
          }]);
     console.log(ad);
  }
  catch (arr) {
     console.log(err);
  }
}



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
const adsRouter = require('./routes/ads');
const citiesRouter = require('./routes/cities');
const usersRouter = require('./routes/users');
const sendemailRouter = require('./routes/email');
const agentRouter = require('./routes/agent');
app.use(logger('dev'));
app.use(express.json());//מאפשר לקבל אוביקטים מסוג json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/ads', adsRouter);
app.use('/cities', citiesRouter);
app.use('/users', usersRouter);
app.use('/email', sendemailRouter);
app.use('/agent', agentRouter)

app.use(cors(options))
// error handler


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;







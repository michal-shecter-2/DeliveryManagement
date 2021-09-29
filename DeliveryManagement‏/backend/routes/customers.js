var express = require('express');
var router = express.Router();
const customers = require("../Model/CustomersModel");//חיבור למודל
//הצגת כל הלקוחות
router.get('/', async (req, res, next) => {
  try {
    const customer = await customers.find({});
    res.send(customer);
  }
  catch (arr) {
    res.send(err);
  }
});
//הוספת לקוח
router.post('/post', async (req, res, next) => {
  try {
    const customer = await customers.create(req.body);
    res.send(customer);
  } catch (err) {
    next(err);
  }
});

//הוספת כמה לקוחות בו זמנית
router.post('/addMany', async (req, res, next) => {
  try {
    const customer = await customers.insertMany(req.body);
    res.send(customer);
  }
  catch (err) {
    res.send(err)
  }
});

//מחיקת לקוח
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const customer = await customers.findOneAndDelete({ _id: req.params.id })
    res.send("The object was successfully deleted")
  }
  catch (err) {
    res.send(err)
  }
});
//עדכון לקוח
router.put('/put/:id', async (req, res, next) => {
  await customers.findOneAndUpdate({ _id: req.params.id }, req.body).then(async (pet) => {
    await customers.findOne({ _id: req.params.id }).then(function (c) {
      res.send(c)
    });
  });
});
router.put('/put/:id', async (req, res, next) => {
  try {
    const customers = await customers.findOneAndReplace({ _id: req.params.id }, req.body);
    res.send(customers);
  }
  catch (err) {
    res.send(err)
  }
});
// router.get('/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   console.log(password);
//   try {
//     const result = await customers.findOne({ email: email, password: password })
//     console.log(result)
//     // if (!result)
//     res.status(200).send(result)
//   }
//   catch (err) {
//     res.status(404).send(`we can't find the data order which id is ${email} NOT_FOUND`)
//   }
// })
module.exports = router;
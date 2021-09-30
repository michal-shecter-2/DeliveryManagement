var express = require('express');
var router = express.Router();
const cities = require("../Model/CitiesModel");//חיבור למודל
//הצגת כל הערים
router.get('/', async (req, res, next) => {
    try {
        const city = await cities.find({});
        res.send(city);
    }
    catch (arr) {
        res.send(err);
    }
});
//הוספת עיר
router.post('/post', async (req, res, next) => {
    try {
        const city = await cities.create(req.body);
        res.send(city);
    } catch (err) {
        next(err);
    }
});

//הוספת כמה ערים בו זמנית
router.post('/addMany', async (req, res, next) => {
    try {
        const city = await cities.insertMany(req.body);
        res.send(city);
    }
    catch (err) {
        res.send(err)
    }
});

//מחיקת עיר
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const city = await cities.findOneAndDelete({ _id: req.params.id })
        res.send("The object was successfully deleted")
    }
    catch (err) {
        res.send(err)
    }
});
//עדכון עיר

router.put('/put/:id', async (req, res, next) => {
    try {
        const city = await cities.findOneAndReplace({ _id: req.params.id }, req.body);
        res.send(city);
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
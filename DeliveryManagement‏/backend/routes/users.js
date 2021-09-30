var express = require('express');
var router = express.Router();
const users = require("../Model/UsersModel");//חיבור למודל
//הצגת כל המשתמשים
router.get('/', async (req, res, next) => {
    try {
        const user = await users.find({});
        res.send(user);
    }
    catch (arr) {
        res.send(err);
    }
});
//הוספת משתמש
router.post('/post', async (req, res, next) => {
    try {
        const user = await users.create(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

//הוספת כמה משתמשים בו זמנית
router.post('/addMany', async (req, res, next) => {
    try {
        const user = await users.insertMany(req.body);
        res.send(user);
    }
    catch (err) {
        res.send(err)
    }
});

//מחיקת משתמש
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const user = await users.findOneAndDelete({ _id: req.params.id })
        res.send("The object was successfully deleted")
    }
    catch (err) {
        res.send(err)
    }
});
//עדכון משתמש

router.put('/put/:id', async (req, res, next) => {
    try {
        const user = await users.findOneAndReplace({ _id: req.params.id }, req.body);
        res.send(user);
    }
    catch (err) {
        res.send(err)
    }
});
router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const result = await users.findOne({ email: email, password: password })
        console.log(result)
        // if (!result)
        res.status(200).send(result)
    }
    catch (err) {
        res.status(404).send(`we can't find the data order which id is ${email} NOT_FOUND`)
    }
})
module.exports = router;
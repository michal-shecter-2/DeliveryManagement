var express = require('express');
var router = express.Router();
const agents = require("../Model/AgentModel");//חיבור למודל
//הצגת כל הסוכנים
router.get('/', async (req, res, next) => {
    try {
        const agent = await agents.find({});
        res.send(agent);
    }
    catch (arr) {
        res.send(err);
    }
});
//הוספת סוכן חכם
router.post('/post', async (req, res, next) => {
    try {
        const agent = await agents.create(req.body);
        res.send(agent);
    } catch (err) {
        next(err);
    }
});


//מחיקת סוכן
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const agent = await agents.findOneAndDelete({ _id: req.params.id })
        res.send("The object was successfully deleted")
    }
    catch (err) {
        res.send(err)
    }
});
//עדכון סוכן

router.put('/put/:id', async (req, res, next) => {
    try {
        const agent = await agents.findOneAndReplace({ _id: req.params.id }, req.body);
        res.send(agent);
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
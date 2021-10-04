var express = require('express');
var router = express.Router();
const ads = require("../Model/AdsModel");//חיבור למודל
//הצגת כל המודעות
router.get('/', async (req, res, next) => {
    try {
        const ad = await ads.find({})
            .populate([{
                path: "origincity",
                select: {
                    name: 1
                }
            }])
            .populate([{
                path: "destinationcity",
                select: {
                    name: 1
                }
            }])
            .populate([{
                path: "usercode",
                select: {
                    firstname: 1,
                    lastname: 1,
                    email:1,
                    phone:1,
                    mobilephone:1
                }
                // .populate([{
                //     path: "deliveryperson",
                //     select: {
                //         firstname: 1,
                //         lastname: 1
                //     }
                // }])
            }]);
        res.send(ad)
    }
    catch (arr) {
        res.send(err);
    }
});
//הוספת מודעה
router.post('/post', async (req, res, next) => {
    try {
        const ad = await ads.create(req.body);
        res.send(ad);
    } catch (err) {
        next(err);
    }
});

//הוספת כמה מודעות בו זמנית
router.post('/addMany', async (req, res, next) => {
    try {
        const ad = await ads.insertMany(req.body);
        res.send(ad);
    }
    catch (err) {
        res.send(err)
    }
});

//מחיקת מודעה
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const ad = await ads.findOneAndDelete({ _id: req.params.id })
        res.send("The object was successfully deleted")
    }
    catch (err) {
        res.send(err)
    }
});
//עדכון מודעה

router.put('/put/:id', async (req, res, next) => {
    try {
        const ad = await ads.findOneAndReplace({ _id: req.params.id }, req.body);
        res.send(ad);
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
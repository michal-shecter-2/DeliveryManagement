var express = require('express');
var router = express.Router();

const ads = require("../Model/AdsModel");//חיבור למודל


//הצגת כל המודעות
router.get('/', async (req, res, next) => {
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
router.post('/find', async (req, res) => {
  const { usercode } = req.body;
   console.log(usercode);
  try {
    const result = await ads.find({usercode:usercode})
    console.log(result)
    // if (!result)
    res.status(200).send(result)
  }
  catch (err) {
    res.status(404).send(`we can't find  ${usercode} NOT_FOUND`)
  }
})
module.exports = router;

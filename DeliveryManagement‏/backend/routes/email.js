var express = require('express');
var router = express.Router();
const {sendEmail} = require('../sendemail')




router.post('/send', async (req, res, next) => {
    try {
        console.log(req.body)
        await sendEmail(req.body);
        res.send({result: "sent successfutyl"});
    } catch (err) {
        next(err);
    }
});
module.exports = router;
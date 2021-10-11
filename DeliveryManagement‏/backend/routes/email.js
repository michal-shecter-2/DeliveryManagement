var express = require('express');
var router = express.Router();
const HttpStatus = require('http-status')
const nodemailer = require('nodemailer')
const { sendEmail } = require('../sendemail')
router.post('/send', async (req, res, next) => {
    try {
        console.log(req.body)
        await sendEmail(req.body);
        res.send({ result: "sent successfutyl" });
    } catch (err) {
        console.log(req.body)
        next(err);
    }
});
module.exports = router;

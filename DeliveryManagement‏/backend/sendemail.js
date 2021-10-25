const HttpStatus = require('http-status')
const nodemailer = require('nodemailer')
const sendEmail = async (mailDetails) => {
    console.log(mailDetails);
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        //host: 'smtp.gmail.com',
        auth: {
            user: 'bytheway321123@gmail.com',
            pass: 'bytheway123',

        }
    });
    const mailOptions = {
        //השם של תיבת המייל
        from: 'bytheway <bytheway321123@gmail.com>',
        to: 'ayala105981@gmail.com',
        // to: mailDetails.deliverysender.usercode.email,
        // subject: `Hi: ${mailDetails.name}, email: ${mailDetails.email}`,
        subject: `We have found a delivery person for you!‏‏`,
        text: `hello ${mailDetails.user.firstname}`
        //         ` Hello ${mailDetails.deliverysender.usercode.firstname} Michal!
        //    Ayala wants to pick up your package on Wednesday at 5 p.m
        //    Please contact by this email njvnfjvnjf@gmail.com
        //    See you next time

        //    BY THE WAY TEAM`,
        // html: ` <div> <font size='5' >Hello ${mailDetails.deliverysender.usercode.firstname}</font><br/><br/>
        // <font size='4' >${mailDetails.user.firstname} wants to pick up your package <br/>
        // From<b> ${mailDetails.deliverysender.origincity}</b> to<b>  ${mailDetails.deliverysender.destinationcity}</b><br/>
        // <b>on Date.pars(day)</b> <br/>
        // Please contact by this<b> email:</b> ${mailDetails.user.email}<br /> or by this <b>phone numbers: </b >${mailDetails.user.phone}/ ${mailDetails.user.mobilephone} <br /><br />
        // See you next time <br /></font>
        // <font size='5'>BY THE WAY TEAM</font>  </div>`

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = {
    sendEmail
}
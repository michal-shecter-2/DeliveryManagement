const HttpStatus = require('http-status')
const nodemailer = require('nodemailer')
const sendEmail = async (mailDetails) => {
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'bytheway321123@gmail.com',
            pass: 'bytheway123',
            
        }
    });
    const mailOptions = {
        //השם של תיבת המייל
        from: 'bytheway <bytheway321123@gmail.com>',
        to: mailDetails.email,
        // subject: `Hi: ${mailDetails.name}, email: ${mailDetails.email}`,
        subject: `We have found a delivery person for you!`,
        text:
        `Hello : ${mailDetails.name},
        Receive this email because there is a delivery person for the ad you posted on our BY THE WAY website.
        Please contact
        Best wishes,
        BY THE WAY TEAM`,
      

        //  `name: ${mailDetails.name},
        //   email: ${mailDetails.email}`

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
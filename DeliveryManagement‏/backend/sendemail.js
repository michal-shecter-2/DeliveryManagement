const HttpStatus = require('http-status')
const nodemailer = require('nodemailer')
const sendEmail = async (mailDetails) => {
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
        to: mailDetails.deliverysender.usercode.email,
        // subject: `Hi: ${mailDetails.name}, email: ${mailDetails.email}`,
        subject: `We have found a delivery person for you!‏‏`,
        text:
            ` Hello ${mailDetails.deliverysender.usercode.firstname} Michal
       Ayala wants to pick up your package on Wednesday at 5 p.m
       Please contact by this email njvnfjvnjf@gmail.com
       See you next time
       BY THE WAY TEAM`,
        html: ` <div> <font size='5' >Hello ${mailDetails.deliverysender.usercode.firstname}</font><br/><br/>
        <font size='4' >${mailDetails.user.firstname} wants to pick up your package <br/>
        From<b> ${mailDetails.deliverysender.origincity}</b> to<b>  ${mailDetails.deliverysender.destinationcity}</b><br/>
        <b>on Date.pars(day)</b> <br/>
        Please contact by this<b> email:</b> ${mailDetails.user.email}<br /> or by this <b>phone numbers: </b >${mailDetails.user.phone}/ ${mailDetails.user.mobilephone} <br /><br />
        See you next time <br /></font>
        <font size='5'>BY THE WAY TEAM</font>  </div>`

        // html: `Dear ${mailDetails.name} , ${mailDetails.name}`
        //     + `<br/>Thank you for visiting the book store of the World Union of Jewish Studies.`
        //     + "<br/> We invite you to become a member of the World Union of Jewish Studies and enjoy discounts on our books and a free copy of our journal “Jewish Studies. "
        //     + "<br/> If you have not yet paid your membership dues for 2020, "
        //     + string.Format(", you may pay them <a href='{0}'>online.</a>", loginUrl)
        //     + "<br/>Your login details:"
        //     + "<br/> Email address:   " +
        //     + "<br/>Password:  " + new String(stringChars)
        //     + "<br/><br/> Feel free to contact us if you have any questions. "
        //     + "<br/><br/> Best regards,"
        //     + "<br/><br/>WUJS staff"


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
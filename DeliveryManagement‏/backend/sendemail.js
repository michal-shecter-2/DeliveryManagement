const HttpStatus = require('http-status')
const nodemailer = require('nodemailer')
const sendEmail = async (mailDetails) => {
    console.log("mailDetails---", mailDetails);
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        //host: 'smtp.gmail.com',
        auth: {
            user: 'bytheway321123@gmail.com',
            pass: 'bytheway123',

        }
    });
    //שליחת מייל של בחרת מודעה
    // const mailOptions = {
    //     //השם של תיבת המייל
    //      to: mailDetails.deliverysender.usercode.email,
    //     subject: `We have found a delivery person for you!‏‏‏‏`,
    //    // text: `hello ${mailDetails.user.firstname}`
    //     html: ` <div> <font size='5' >Hello ${mailDetails.deliverysender.usercode.firstname}</font><br/><br/>
    //     <font size='4' >${mailDetails.user.firstname} wants to pick up your package <br/>
    //     From<b> ${mailDetails.deliverysender.origincity}</b> to<b>  ${mailDetails.deliverysender.destinationcity}</b><br/>
    //     <b>on Date.pars(day)</b> <br/>
    //     Please contact by this<b> email:</b> ${mailDetails.user.email}<br /> or by this <b>phone numbers: </b >${mailDetails.user.phone}/ ${mailDetails.user.mobilephone} <br /><br />
    //     See you next time <br /></font>
    //     <font size='5'>BY THE WAY TEAM</font>  </div>`

    // };

    function convertDay(day) {
        var day = new Date(day);
        var dayName = day.toLocaleDateString();
        return dayName;
    };

    //שליחת מייל של סוכן חכם
    const mailOptions = {
        //השם של תיבת המייל
        from: 'bytheway <bytheway321123@gmail.com>',
        to: mailDetails.user.email,
        subject: `יש הצעה חדשה בשבילך by the way לסוכן החכם`,
        // text: `hello ${mailDetails.user.firstname}`
        html: ` <div> <font size='5' >Hello ${mailDetails.user.firstname}</font><br/>
        <font size='4' >The smart agent found ads for you according to the criteria you defined <br/>
        <font size='4'>Delivery from ${mailDetails.ads.origincity} to ${mailDetails.ads.destinationcity}</font><br/>
        <font size='4'>The package must be delivered by ${mailDetails.ads.adsfinaldate},</font>
        <font size='4'>For a fee of  ${mailDetails.ads.cost}. %</font><br/>
        <font size='4'>(the ${mailDetails.ads.size} size)  </font><br/><br/><br/>

        <font size='4'>If this interests you, contact the owner of the package by email ${mailDetails.ads.usercode.email}  </font><br/>`


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
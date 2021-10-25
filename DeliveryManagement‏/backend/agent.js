// שליפת כול המודעות אל תוך מערך,מודעות שהתפרסמו אתמול
var express = require('express');
var router = express.Router();
const { sendEmail } = require("./sendemail");
// const ads = require("../Model/AdsModel");//חיבור למודל


//הצגת כל המודעות
var ads = require("./Model/AdsModel");//חיבור למודל
const agents = require("./Model/AgentModel");//חיבור למודל

const smartagent = async () => {
    console.log("---------------------------------------------------------");
    const alladds = [];
    const allagents = [];
    await getallads();
    await getallagents();
    await FilterAndSend()
}
async function getallads() {
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

        alladds = ad;
        alladds.map(item => console.log('hhhhhh---', item))
    }
    catch (arr) {
        console.log(err);
    }
}
async function getallagents() {
    try {
        const agent = await agents.find({})
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
        allagents = agent;
        allagents.map(item => console.log('ggggg---', item))
    }
    catch (arr) {
        console.log(err);
    }
};
// מחפשים מודעות שעונות לסוכן חכם של המתמש במידה והמערך שחוזר אלינו אינו ריק נעשה קשרי גומלין ונשלח לו מייל
async function FilterAndSend() {
    allagents.map(item => {
        let temparr = alladds.filter(i => i.origincity == item.origincity && i.destinationcity == item.destinationcity && i.cost >= item.price);
        console.log("temparr-----", temparr);
        // let temparr = filters(item.origincity, item.destinationcity, item.price);
        // console.log("temparr-----", temparr);
        // console.log(item.usercode);
        if (temparr != null) {
            console.log(item.usercode.firstname);
            sendEmail({
                ads: temparr[0],
                user: item.usercode
            })
            //צריך לשלוח לפונקציה מודעה -מודעה על מנת שילחו מייל לקוד משתמש של הסוכן   
        }
    })
}

//פונקציה שתפלטר את המודעות על פי:עיר מוצא, יעד ומחיר
async function filters(origincity, destinationcity, price) {
    //מודעות שתואמות למאפייני סוכן אחד
    let tmp = await alladds.filter(i => i.origincity == origincity && i.destinationcity == destinationcity && i.cost >= price)
    console.log("temparr-----", tmp);
    return tmp;
}
// let temparr = [];
// const myPromise = new Promise((resolve, reject) => {

//     let a = filters("Bnei Brak", "Jerusalem", 40);
//     resolve(a);
//     reject('error');
// });



module.exports = {
    smartagent
}


//שליפת הקולקשן של הסוכן אל תוך מערך

//הצגת כל הסוכנים



//עוברים על מערך סוכן חכם-לכול רשומה בודקים מה העיר מוצא יעד והמחיר ואז עוברים על רשימת המודעות ועושים פילטר


//במידה ומצאנו צריך לשלוף את כתובת המייל של האדם שפרסם וכתובת המייל של האדם השליח ושלוח מייל למפרסם
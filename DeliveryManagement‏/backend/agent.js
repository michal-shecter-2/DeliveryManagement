// שליפת כול המודעות אל תוך מערך,מודעות שהתפרסמו אתמול
var express = require('express');
var router = express.Router();

const ads = require("../Model/AdsModel");//חיבור למודל


//הצגת כל המודעות
// async function getallads() => {
//     try {
//         const ad = await ads.find({})
//             .populate([{
//                 path: "usercode",
//                 select: {
//                     firstname: 1,
//                     lastname: 1,
//                     email: 1,
//                     phone: 1,
//                     mobilephone: 1
//                 }
//             }]);
//         res.send(ad)
//     }
//     catch (arr) {
//         res.send(err);
//     }
// });




//שליפת הקולקשן של הסוכן אל תוך מערך





//עוברים על מערך סוכן חכם-לכול רשומה בודקים מה העיר מוצא יעד והמחיר ואז עוברים על רשימת המודעות ועושים פילטר


//במידה ומצאנו צריך לשלוף את כתובת המייל של האדם שפרסם וכתובת המייל של האדם השליח ושלוח מייל למפרסם
// שליפת כול המודעות אל תוך מערך,מודעות שהתפרסמו אתמול
var express = require('express');
var router = express.Router();
const { sendEmail } = require("./sendemail");
// const ads = require("../Model/AdsModel");//חיבור למודל


//הצגת כל המודעות
const ads = require("./Model/AdsModel");//חיבור למודל
const agents = require("./Model/AgentModel");//חיבור למודל
const smartagent = async () => {
console.log("---------------------------------------------------------");
    const alladds=[];
const allagents=[];
async function getallads()  {
    try {
        const ad = await ads.find({})
            .populate([{
                path: "usercode",
                select: {a
                    firstname: 1,
                    lastname: 1,
                    email: 1,
                    phone: 1,
                    mobilephone: 1
                }
            }]);
       console.log(ad);
    }
    catch (arr) {
       console.log(err);
    }
  }
     
    //   async function getallagents() {
    //     try {
    //         const agent = await agents.find({});
    //         allagents.push(agent);
    //     }
    //     catch (arr) {
    //       console.log(err);
    //     }
    // };


    //מחפשים מודעות שעונות לסוכן חכם של המתמש במידה והמערך שחוזר אלינו אינו ריק נעשה קשרי גומלין ונשלח לו מייל
     
//     allagents.map(item=>()=>{
//       let temparr=  filters(item.origincity,item.destinationcity,item.price)
// if(temparr!=null)
// {
//     sendEmail({
//         ads:temparr[0],
//         user:item.usercode
//     })
//  //צריך לשלוח לפונקציה מודעה -מודעה על מנת שילחו מייל לקוד משתמש של הסוכן   
// }
//      } )
   
    
    //פונקציה שתפלטר את המודעות על פי:עיר מוצא, יעד ומחיר
   
//    function filters(origincity,destinationcity,price) {
//          //מודעות שתואמות למאפייני סוכן אחד
//  let tmp = allads.filter(i => i.origincity == origincity && i.destinationcity == destinationcity&&i.cost>=price);
// return tmp
//     }
 

}

module.exports = {
    smartagent
}
//שליפת הקולקשן של הסוכן אל תוך מערך

//הצגת כל הסוכנים



//עוברים על מערך סוכן חכם-לכול רשומה בודקים מה העיר מוצא יעד והמחיר ואז עוברים על רשימת המודעות ועושים פילטר


//במידה ומצאנו צריך לשלוף את כתובת המייל של האדם שפרסם וכתובת המייל של האדם השליח ושלוח מייל למפרסם
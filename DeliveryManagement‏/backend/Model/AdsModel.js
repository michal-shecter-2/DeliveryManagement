const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ads = new Schema(
    {
        usercode: {
            type:Number
        },
        origincity: {
            type:Number
        },
        destinationcity:{
            type:Number
        },
        uploaddate: {
            type:Date,
            default:Date.now
        },
        finaldate:{
            type:Date,
            default:Date.now
        },
        deliveryperson:{
            type: String
        },
        note:{
            type: String
        },
       
    },
    { collection: "ads" }
);
module.exports = mongoose.model("ads", ads);
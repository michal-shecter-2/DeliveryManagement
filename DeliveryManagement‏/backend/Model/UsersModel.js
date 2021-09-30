const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const users = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        password:{
            type:string
        },
        email: {
            type: String
        },
        phone:{
            type:Number
        },
        mobilephone:{
            type:Number
        },
        citycode:{
            type:S
        },
       street:{
        type: String
        },
    },
    { collection: "users" }
);
module.exports = mongoose.model("users", users);

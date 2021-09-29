const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Customers = new Schema(
    {
        id:{
        type: Number
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone:{
            type:Number
        },
        address:{
            type: String   
        }
    },
    { collection: "Customers" }
);
module.exports = mongoose.model("Customers", Customers);

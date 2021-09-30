const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ads = new Schema(
    {

        
        usercode: {
            type: String
        },
        origincity: {
            type: String
        },
        destinationcity: {
            type: String
        },
        cost: {
            type: Number
        },
        uploaddate: {
            type: Date,
            default: Date.now
        },
        finaldate: {
            type: Date,
            default: Date.now
        },
        deliveryperson: {
            type: String
        },
        note: {
            type: String
        },
        size: {
            type: Number
        },
        like: {
            type: Number
        },

    },
    { collection: "ads" }
);
module.exports = mongoose.model("ads", ads);
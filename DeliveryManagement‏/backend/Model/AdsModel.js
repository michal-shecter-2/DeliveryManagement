const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ads = new Schema(
    {

        
        usercode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        origincity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cities'
        },
        destinationcity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cities'
        },
        cost: {
            type: Number
        },
        uploaddate: {
            type: Date,
            default: Date.now
        },
        finaldate: {
            type: Date
        },
        deliveryperson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
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
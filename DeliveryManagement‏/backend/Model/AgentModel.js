const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agent = new Schema(
    {
        usercode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        origincity: {
            type: String,
        },
        destinationcity: {
            type: String,
        },
        price: {
            type: Number
        }
    },
    { collection: "agent" }
);
module.exports = mongoose.model("agent", agent);
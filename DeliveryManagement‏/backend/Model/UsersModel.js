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
        password: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        mobilephone: {
            type: String
        },
        citycode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cities'
        },
        street: {
            type: String
        },
    },
    { collection: "users" }
);
module.exports = mongoose.model("users", users);

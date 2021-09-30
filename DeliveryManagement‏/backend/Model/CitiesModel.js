const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cities = new Schema(
    {  
        name: {
            type: String
        },
    },
    { collection: "cities" }
);
module.exports = mongoose.model("cities", cities);
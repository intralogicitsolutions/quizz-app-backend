const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category_schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String
    }
});

module.exports = mongoose.model("categories", category_schema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: Array,
        required: true,
    },
    correct_answer: {
        type: Number,
        required: true,
    },
    question_id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("questions", QuestionSchema);
const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    id: Number,
    quizType: String,
    url: String,
    answer: String
})


const Quiz = mongoose.model("Quiz", quizSchema);


module.exports = Quiz;
const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    quizType: String,
    url: String,
    answer: String
})


const Quiz = mongoose.model("Quiz", quizSchema);


module.exports = Quiz;
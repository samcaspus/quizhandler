const Quiz = require("../model/questionSet")

module.exports.progress = (req, res) => {
    return res.status(200).json({
        "progress": "d"
    })
}



module.exports.question = async (req, res) => {
    const { progress } = req.query;

    const question = await Quiz.findOne({ id: progress });
    return res.status(200).json({
        "data": question
    })
}



module.exports.createQuestion = async (req, res) => {
    const { option, url, answer } = req.body;
    const length = await Quiz.find({});
    await Quiz.create({
        id: length.length,
        quizType: option,
        url,
        answer
    }, (err) => {
        if (err) {
            console.log(err);
        }
    })

    return res.redirect("/")
}



module.exports.deleteQuestion = async (req, res) => {
    const { answer } = req.body;
    await Quiz.deleteOne({
        answer
    })

    return res.redirect("/")
}


module.exports.template = async (req, res) => {
    const response = await Quiz.find({}).sort("asce");
    return res.render("index", { response: response });
}
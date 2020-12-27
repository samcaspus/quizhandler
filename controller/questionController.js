
module.exports.progress = (req, res) => {
    return res.status(200).json({
        "progress": "d"
    })
}



module.exports.question = (req, res) => {
    return res.status(200).json({
        "question": "d"
    })
}



module.exports.createQuestion = (req, res) => {
    return res.status(200).json({
        "create": "d"
    })
}



module.exports.deleteQuestion = (req, res) => {
    return res.status(200).json({
        "delete": "d"
    })
}


module.exports.template = (req, res) => {
    return res.render("index");
}
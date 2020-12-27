const express = require("express");
const mongoose = require("../config/mongoose");
const questionController = require("../controller/questionController");
const router = express.Router();


router.get("/", questionController.template)
router.get("/get-progress", questionController.progress);
router.get("/get-question", questionController.question);
router.post("/create-question", questionController.createQuestion);
router.post("/delete-question", questionController.deleteQuestion);



module.exports = router;

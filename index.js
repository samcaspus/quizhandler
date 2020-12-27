const express = require(`express`);
const router = express.Router();
const port = 8000;

app = express();

app.use("/", require("./router"))




app.listen(port, (err) => {

    if (err) {
        console.log("something went wrong");
    }

    console.log("established connection with port");

})
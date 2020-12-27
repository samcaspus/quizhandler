const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testing', { useNewUrlParser: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection_with_db_established");
});


module.exports = mongoose;
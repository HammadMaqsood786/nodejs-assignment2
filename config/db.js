const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://HammadMaqsood:hammadm786@forlearning.jqqke7e.mongodb.net/ridesApp?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

module.exports = mongoose;
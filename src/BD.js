const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const muggerSchema = new Schema({
    testName: String,
    testNumber: Number,
    howManyWon: Number,
});

const mugger = mongoose.model("dataBase", muggerSchema);

module.exports = mugger
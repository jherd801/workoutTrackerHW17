const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose schema to structure a newly created cardio workout
const CardioSchema = new Schema({
    type: String,
    distance: Number,
    duration: Number
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;

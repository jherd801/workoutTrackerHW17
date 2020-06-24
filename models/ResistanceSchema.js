const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose schema to structure a newly created resistance workout
const ResistanceSchema = new Schema({
    exercise: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
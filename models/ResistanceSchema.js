const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose schema to structure a newly created resistance workout
const ResistanceSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
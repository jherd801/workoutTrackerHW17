const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose schema to structure a newly created workout object

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },

    exercises: [
        {
        type: String,
        name: String,
        trim: true,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout

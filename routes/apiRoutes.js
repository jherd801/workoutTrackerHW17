const db = require("../models");
const { Workout } = require("../models");

module.exports = function (app) {
    // API route to get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(function (dbWorkouts) {
        res.json(dbWorkouts);
        })
        .catch(err => {
        res.json(err)
        });
    });

    // Route to get a single workout by id
    app.get("/api/workouts/:id", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    });
    

    // API route to post to all workouts
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // API route to update a specific workout
    app.put("/api/api/workouts/:id", function (req, res) {

    });

    // API route to get all workouts within a defined range
    app.get("/api/api/workouts/range", function(req, res) {
        
    });
};


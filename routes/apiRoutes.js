const express = require("express");
const app = express();
const db = require("../models/index.js");
const { Workout } = require("../models/index.js");


// API route to get all workouts
app.get("/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
});

// -----------------------   Shit doesn't work :(    ---------------------------
// Route to get a single workout by id
app.get("/workouts/:id", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    });
});
  

// API route to post to all workouts
app.post("/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// API route to update a specific workout
app.put("/api/workouts/:id", function (req, res) {

});

// API route to get all workouts within a defined range
app.get("/api/workouts/range", function(req, res) {
    
});


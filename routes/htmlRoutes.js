const path = require("path");

module.exports = function (app) {
    
    //HTML GET requests
    app.get("/",  (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

    // If no matching route is found default to index
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}

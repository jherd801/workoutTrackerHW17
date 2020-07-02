const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models/index.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving up static middleware
app.use(express.static("./public"));
app.use(express.static("./routes/apiRoutes.js"));
app.use(express.static("./routes/htmlRoutes.js"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

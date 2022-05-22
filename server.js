//
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/subscribers", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));

db.once("open", (error) => console.log("Connected to database"));

app.listen(3000, () => console.log("Server Started"));

//dependencies
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3535;


//middleware to handle, APIs and JSON
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//telling heroku to use the build folder when serving web page
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

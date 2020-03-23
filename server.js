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

//allows us to use our routes
app.use(routes);

//telling heroku to use the build folder when serving web page
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//connecting goose, naming our database /bucketlist is our db name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bucketlist", { useNewUrlParser: true });
//creating db variable
var db = mongoose.connection;
//=>seeders gets run manually with node index.js in the seeder directory
//=>move to model folder to follow db track


// Start the API server
app.listen(PORT, function () {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("DB created and connected succesfully")
    });
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
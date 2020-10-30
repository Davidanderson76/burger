const exphbs = require("express-handlebars");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve
// static content for the app from the "public" 
// directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// importing routes to give access to server //
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//sets up to display when the app is connect to the port and which port //
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT );
});

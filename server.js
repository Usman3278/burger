//Add required modules
const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;


app.use(express.static("public"));

//Read URL or JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Listener
app.listen(PORT, function() {
    //Log server when server has started
    console.log("App listening on PORT: "  + PORT);
});


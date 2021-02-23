var PORT = process.env.PORT || 5000;

const express = require("express");



const app = express();


app.use(express.static("public"));

//Parse app body as JSON
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
    //Log serve when server has started
    console.log("server listening on: http://localhost:" + PORT);
});

  
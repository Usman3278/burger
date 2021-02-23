  // add required modules
  var PORT = process.env.PORT || 5000;
  const express = require("express");
  const path = require("path");
  
  // create an express server & set a port to 8000
  const app = express();
  const PORT = process.env.PORT || 8000;

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


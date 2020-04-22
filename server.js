// dependencies

var express = require("express");
var path = require("path");


var app = express();
require("./app/routing/htmlRoutes.js")(app)
var PORT  = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());







app.listen(PORT, function(){
    console.log(" App listening on PORT: " + PORT);
})
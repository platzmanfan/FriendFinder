// dependencies

var express = require("express");
var path = require("path");


var app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.use(express.static("."));
app.use(express.static(path.join(__dirname, '/public')));


var PORT  = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/api/friends" , function(req,res){
    var newData = req.body;
    friendsData.push(newData);
    // res.send(true)
})





app.listen(PORT, function(){
    console.log(" App listening on PORT: " + PORT);
})
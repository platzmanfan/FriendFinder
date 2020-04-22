var data = require ("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function (req,res){
        res.json(data);
    })
    app.post("/api/firends", function (req,res){
        res.json(data);
    })
}
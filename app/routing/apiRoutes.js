var friendsData = require ("../data/friends.js");



module.exports = function(app){
    app.get("/api/friends", function (req,res){
        res.json(friendsData);
    })
    app.post("/api/friends", function (req,res){
       var userInput = req.body;

       var userResponse = userInput.scores

       var totalDifference = 100;
       
       var matchName = "";
       var matchPicture = "";

        for (var i =0;i<friendsData.length;i++){
            var sum =0;
            for (var j=0;j<userResponse.length;j++){
                sum += Math.abs(friendsData[i].scores[j]- userResponse[j]);
            }
            // console.log(sum) 
            if (sum < totalDifference){
                
                totalDifference = sum;
                // console.log("Match is found " + sum)
               
                matchName = friendsData[i].name;
                matchPicture = friendsData[i].photo;
                // console.log("Friend name " + matchName)
                // console.log("friend image = " + matchPicture)
            }
            
        }
        friendsData.push(userInput);
        
        // console.log("userresponse " +userResponse);ed
        res.json({status: 'OK', matchName: matchName, matchPicture: matchPicture});
    });
};
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
//to use static files in our projects like css and images, we need to use static method of express 
//we created one folder as static and placed all static files in that
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;


});

app.listen("3000", function(){
    console.log("Server is running on port 3000");
});

//3c83d170d651f48509c665b75570a5b3-us11
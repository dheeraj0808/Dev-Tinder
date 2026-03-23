const express = require("express");
const app = express();

app.use("/user", (req, res) => {
    console.log("User route");
    res.send("User route");
    //in the above line res.send is used to send the response to the client
    //and  if this line is not present the we got error 

    //next () :- it is used to pass the request to the next middleware
})

app.get("/user",
    (req, res, next) => {
        console.log("this is the the first get");
        next();
    },
    (req, res) => {
        res.send("this is the final respose");

    }

);
// in the above lines next () is used to pass the request to the next middleware
// if we not use next () then the request will not go to the next middleware
// and we got error
// if it does not find any response 


module.exports = app;

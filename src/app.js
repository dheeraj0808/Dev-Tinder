const express = require("express");
const app = express();

app.use("/user",(req,res)=>{
    console.log("User route");
    res.send("User route");
    //in the above line res.send is used to send the response to the client
    //and  if this line is not present the we got error 
  
    //next () :- it is used to pass the request to the next middleware
})


module.exports = app;

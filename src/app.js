const express = require("express");
const app = express();

app.use((req, res, next) => {
    const token = "xyz";

    const isAuthorized = token === "xyz";

    if (!isAuthorized) {
        res.status(404).send({ message: "you are not authorized" });
    }
    else {
        next();
    }

});

app.get("/", (req, res) => {
    res.send("this is the home page");
});


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


module.exports = app

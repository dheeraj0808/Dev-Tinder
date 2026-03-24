const express = require("express");
const app = express();
const { AdminAuth, UserAuth } = require("./middleware/auth");
const pool = require('./config/database')

pool.promise()
    .getConnection()
    .then(() => {
        console.log("db connection is successful");
    })
    .catch((error) => {
        console.log("database connection failed", error);
    });
app.use("/admin", AdminAuth);
app.get("/admin", (req, res) => {
    res.send("this is the home page");
});
//app.use("/user",UserAuth);
// if there is only one routes then we can simply writes there so we don't need to write it seperately 
// but if there are multiple routes then we can use app.use()
app.get("/user", UserAuth,
    (req, res, next) => {
        console.log("this is the the first get");
        next();
    },
    (req, res) => {
        res.send("this is the final respose");

    }

);
app.get("user/login",
    (req, res) => {
        res.send("this is the login page");
    }

)
// in the above lines next () is used to pass the request to the next middleware
// if we not use next () then the request will not go to the next middleware
// and we got error
// if it does not find any response 


module.exports = app

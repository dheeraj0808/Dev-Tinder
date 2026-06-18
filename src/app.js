const express = require("express");
const authRoutes = require("./routes/auth.routes.js");
const helmet = require("helmet");

const app = express();

require("./utils/cronjob");


app.use(express.json());
app.use(helmet());

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);

module.exports = app;
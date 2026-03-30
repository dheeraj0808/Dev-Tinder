const express = require("express");
const authRoutes = require("./routes/auth.routes.js");
const sequelize = require("./config/database");
const helmet = require("helmet");

const app = express();


app.use(express.json());
sequelize.sync();
app.use(helmet());

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed", error);
    }
};

connectDB();

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);

module.exports = app;
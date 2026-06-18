require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/database");

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Database connected");

        app.listen(process.env.PORT || 3000, () => {
            console.log("Server running on port " + (process.env.PORT || 3000));
        });
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
};

startServer();

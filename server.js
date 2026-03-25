const app = require("./src/app");
require("dotenv").config();

app.listen(process.env.DB_PORT || 3000, () => {
    console.log("Server running on port " + (process.env.DB_PORT || 3000));
});
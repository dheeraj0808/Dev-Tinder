const express = require("express");
const router = express.Router();
const { register, login, getUserByEmail } = require("../controller/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/user", getUserByEmail);


module.exports = router;

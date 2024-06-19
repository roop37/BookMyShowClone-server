const express = require("express");
const router = express.Router();
 const { loginUser, CreateUser } = require("../services/authService");

router.post("/login", loginUser);
router.post("/create", CreateUser);

module.exports = router;

const express = require("express");
const router = express.Router();
// const { loginUser, CreateUser } = require("../services/authService");

router.get("/:id", getUserById);
router.get("/booked", getUserBookings);

module.exports = router;

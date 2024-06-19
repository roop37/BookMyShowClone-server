const express = require("express");
const router = express.Router();
  const { getUserById, getUserBookings } = require("../services/userService");

router.get("/", getUserById);
router.get("/bookings", getUserBookings);

module.exports = router;

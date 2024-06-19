const express = require("express");
const router = express.Router();
// const { loginUser, CreateUser } = require("../services/authService");

// router.post("/createEvent", createEvent);
router.get("/:id", getEventById);
router.post("/book", bookEvent);
router.get("/eventNearby", getEventByNearby);

module.exports = router;

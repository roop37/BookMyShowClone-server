const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEventById,
  getAllEvents,
} = require("../services/eventService");

router.post("/createEvent", createEvent);
router.get("/", getEventById);
router.get("/events", getAllEvents);
// router.post("/book", bookEvent);
// router.get("/eventNearby", getEventByNearby);
// router.get("/comment", addComment);

module.exports = router;

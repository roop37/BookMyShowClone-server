const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEventById,
  getAllEvents,
  getEventByNearby,
  bookEvent,
  addComment,
} = require("../services/eventService");

router.post("/createEvent", createEvent);
router.get("/", getEventById);
router.get("/events", getAllEvents);
router.post("/book", bookEvent);
router.get("/eventNearby", getEventByNearby);
router.post("/comment", addComment);
// router.post("/cancelBooking", cancelBooking);

module.exports = router;

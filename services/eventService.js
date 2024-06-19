const User = require("../models/user");
const Event = require("../models/events");
const Booking = require("../models/booking");

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const saveEvent = await newEvent.save();

    res.status(200).json(saveEvent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.body;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getEventByNearby = async (req, res) => {
  try {
    const { city } = req.body;
    const nearbyEvents = await Event.find({ city });
    res.status(200).json(nearbyEvents);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const bookEvent = async (req, res) => {
  try {
    const { eventId, userId } = req.body;
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);
    if (!event || !user) {
      return res.status(400).json({ message: "Invalid User or Event" });
    }
    const booking = new Booking({ event: eventId, user: userId });
    await booking.save();
    user.booking.push(booking);
    await user.save();
    res.status(200).json(booking);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { eventId, userId, comment } = req.body;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(400).json({ message: "Invalid Event" });
    }
    event.comment.push({ user: userId, comment });
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createEvent,
  getEventById,
  getAllEvents,
  getEventByNearby,
  bookEvent,
  addComment,
};

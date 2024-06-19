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

module.exports = { createEvent, getEventById, getAllEvents };

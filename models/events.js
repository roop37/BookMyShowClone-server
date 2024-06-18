const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const EventSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  capacity: {
    type: Number,
    
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  eventAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

// Create the model
const Event = mongoose.model('event', EventSchema);

module.exports = Event;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const bookSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: "event",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  bookDate: {
    type: Date,
    default: Date.now(),
  },
});

// Create the model
const Booking = mongoose.model("booking", bookSchema);

module.exports = Booking;

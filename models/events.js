const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  eventAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      comment: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;

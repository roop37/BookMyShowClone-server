const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
  },
  booking: [
    {
      type: Schema.Types.ObjectId,
      ref: "booking",
    },
  ],
  currentCity: {
    type: String,
  },
  currentState: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const bookSchema = new Schema({
event:{
  type: chema.Types.ObjectId,
  ref:"event"
},
user:{
  type: schema.Types.ObjectId,
  ref:"user"
},
bookDate:{
  type:Date,
  default:Date.now()
}
});

// Create the model
const Booking = mongoose.model('booking', bookSchema);

module.exports = Booking;

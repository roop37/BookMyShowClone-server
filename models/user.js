const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type:String,
    require:true
  },
  phoneNumber:{
    type:Number,
    required:true
  },
  booking: [{
    type: Schema.Types.ObjectId,
    ref: 'event'
  }],
  currentCity:{
    type:String,
    required:true
  },
  currentState:{
    type:String,
    required:true
  }
});

const User=mongoose.model("user",userSchema);

module.exports=User;

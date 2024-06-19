const User = require("../models/user");

//Getting user id in the backend and returning the user
const getUserById= async (req,res)=>{
  try{
    const {  id } = req.body;
    const user= await User.findById(id)
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
    res.json(user)
  }
  catch(err){
    console.log(err)
   res.status(400).json({message:err.message})
  }
}


//Getting all the  bookings of the user
const getUserBookings=async (req,res)=>{
  try{
    const bookings=await User.findById(req.body.id).populate("booking")
    res.json(bookings)
  }
  catch(err){
    console.log(err)
    res.status(400).json({message:err.message})
    
  }
}


module.exports = { getUserById, getUserBookings };

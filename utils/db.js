const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanbedan9989:Ilowemcgs1PwVBUw@clusterbookmyshow.a53ppuy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBookMyShow"
    );

    console.log("Cnnnected to Mongo Yeahhhh");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

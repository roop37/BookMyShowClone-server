const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const authRoute = require("./routes/authRoutes");
app.use(bodyParser.json());
const mongoose=require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/bookmyshow")
  .then((e) => console.log("mongodB connected"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoute);
app.use("/events", eventRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

//MONGO_URL=mongodb://localhost:27017/

// /auth/login
// /auth/create
// /auth/forget
// /auth/logout

// /user/getUser
// /user/getBookings

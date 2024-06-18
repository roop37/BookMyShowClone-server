const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const authRoute = require("./routes/authRoutes");
app.use(bodyParser.json());
const conectDB = require("./utils/db");
const mongoose = require("mongoose");

conectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoute);
// app.use("/events", eventRoutes);
// app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

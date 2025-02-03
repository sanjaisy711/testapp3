const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User"); // Import the User model
const app = express();
const port = 5001;
const mongoose = require("mongoose");

// Middleware
app.use(
  cors({
    origin: "https://main.d3tym2jx46vmte.amplifyapp.com",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/awstest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Route to handle form data

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", async (req, res) => {
  const { field1, field2, field3, field4 } = req.body;
  console.log(req.body);
  try {
    const newUser = new User({ field1, field2, field3, field4 });
    await newUser.save();
    res
      .status(200)
      .json({ message: "User data saved successfully!", data: newUser });
  } catch (err) {
    console.error("Error saving user data:", err);
    res.status(500).json({ error: "Server error" });
  }
  // console.log("Received data:", { field1, field2, field3, field4 });
  // res.json({ message: "Data received successfully!" });
});

// Start the server

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

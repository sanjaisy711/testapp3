const mongoose = require("mongoose");

// Define a schema for the user
const userSchema = new mongoose.Schema({
  field1: { type: String },
  field2: { type: String },
  field3: { type: String },
  field4: { type: String },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User; // Export the model to use it in other files

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);

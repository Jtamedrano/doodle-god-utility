const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userScheme);

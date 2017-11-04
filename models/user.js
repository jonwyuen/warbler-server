const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  },
  warbles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warble"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

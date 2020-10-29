const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  displayName: { type: String },
  gameData: {
    levels: [
      {
        name: { type: String, unique: true },
        items: [
          {
            name: String,
            groupId: String,
            groupName: String,
          },
        ],
        outcomes: [
          {
            itemOne: String,
            itemTwo: String,
            test: Boolean,
            result: Array,
          },
        ],
      },
    ],
  },
});

module.exports = User = mongoose.model("user", userScheme);

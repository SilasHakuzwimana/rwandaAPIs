const mongoose = require("mongoose");

const provenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = mongoose.model("provences", provenceSchema);

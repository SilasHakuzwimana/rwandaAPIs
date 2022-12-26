const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  provenceId: { type: String, required: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = mongoose.model("districts", districtSchema);

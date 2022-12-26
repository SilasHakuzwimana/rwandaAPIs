const mongoose = require("mongoose");

const villageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  provenceId: { type: String, required: true },
  districtId: { type: String, required: true },
  sectorId: { type: String, required: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = mongoose.model("villages", villageSchema);

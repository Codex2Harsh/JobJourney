const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  location: String,
  type: String,
  status: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);
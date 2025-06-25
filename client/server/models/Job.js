// client/server/models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  company: String,
  role: String,
  status: {
    type: String,
    enum: ["Pending", "Interview", "Offer", "Rejected"],
    default: "Pending",
  },
  date: String, // Date applied (manually entered)
});

module.exports = mongoose.model("Job", jobSchema);

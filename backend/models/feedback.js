const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  ratings: {
    serviceQuality: Number,
    transparency: Number,
    responsiveness: Number
  },
  comment: String,
  isAnonymous: Boolean
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);

const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true
    },
    ratings: {
      serviceQuality: { type: Number, required: true },
      transparency: { type: Number, required: true },
      responsiveness: { type: Number, required: true }
    },
    comment: String,
    isAnonymous: Boolean
  },
  { timestamps: true }
);

// ✅ SAFE MODEL EXPORT (IMPORTANT)
module.exports =
  mongoose.models.Feedback ||
  mongoose.model("Feedback", feedbackSchema);

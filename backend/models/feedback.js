const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
      required: true
    },
    ratings: {
      relevance: { type: Number, required: true },
      accuracy: { type: Number, required: true },
      sentiment: { type: Number, required: true }
    },
    comment: String,
    sentimentLabel: {
      type: String,
      enum: ["Positive", "Neutral", "Negative"]
    },
    region: String,
    language: String,
    category: String
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Feedback ||
  mongoose.model("Feedback", feedbackSchema);

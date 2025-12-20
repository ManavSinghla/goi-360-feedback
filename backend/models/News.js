const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    publishedDate: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.News || mongoose.model("News", newsSchema);

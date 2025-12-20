const Feedback = require("../models/feedback");
const News = require("../models/News");

const detectSentiment = (comment = "") => {
  const text = comment.toLowerCase();
  if (text.includes("good") || text.includes("excellent")) return "Positive";
  if (text.includes("bad") || text.includes("fake")) return "Negative";
  return "Neutral";
};

exports.submitFeedback = async (req, res) => {
  try {
    const { newsId, ratings, comment } = req.body;

    const news = await News.findById(newsId);
    if (!news) return res.status(404).json({ message: "News not found" });

    const feedback = await Feedback.create({
      userId: req.user.id,
      newsId,
      ratings,
      comment,
      sentimentLabel: detectSentiment(comment),
      region: news.region,
      language: news.language,
      category: news.category
    });

    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting feedback" });
  }
};

exports.getFeedbackByNews = async (req, res) => {
  const feedback = await Feedback.find({ newsId: req.params.newsId })
    .populate("userId", "name");
  res.json(feedback);
};

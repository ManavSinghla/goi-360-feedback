const Feedback = require("../models/feedback");

// Overall sentiment distribution
exports.sentimentDistribution = async (req, res) => {
  try {
    const data = await Feedback.aggregate([
      {
        $group: {
          _id: "$sentimentLabel",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.feedbackByRegion = async (req, res) => {
  try {
    const data = await Feedback.aggregate([
      {
        $group: {
          _id: "$region",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.feedbackByCategory = async (req, res) => {
  try {
    const data = await Feedback.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.recentFeedback = async (req, res) => {
  try {
    const data = await Feedback.find()
      .populate("newsId", "title")
      .populate("userId", "name")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

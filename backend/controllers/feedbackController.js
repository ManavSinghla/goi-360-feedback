const Feedback = require("../models/feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { departmentId, ratings, comment, isAnonymous } = req.body;

    const feedback = await Feedback.create({
      userId: req.user.id,
      departmentId,
      ratings,
      comment,
      isAnonymous
    });

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ userId: req.user.id })
      .populate("departmentId", "name")
      .sort({ createdAt: -1 });

    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

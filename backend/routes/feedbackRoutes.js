const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  submitFeedback,
  getFeedbackByNews
} = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", authMiddleware, submitFeedback);
router.get("/news/:newsId", authMiddleware, getFeedbackByNews);

module.exports = router;

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  submitFeedback,
  getMyFeedbacks
} = require("../controllers/feedbackController");

const router = express.Router();

// submit feedback
router.post("/", authMiddleware, submitFeedback);

// get logged-in user's feedback
router.get("/my", authMiddleware, getMyFeedbacks);

module.exports = router;

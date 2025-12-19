const express = require("express");
const { submitFeedback, getMyFeedbacks } = require("../controllers/feedbackController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// submit feedback
router.post("/", authMiddleware, submitFeedback);

// citizen feedback history
router.get("/my", authMiddleware, getMyFeedbacks);

module.exports = router;

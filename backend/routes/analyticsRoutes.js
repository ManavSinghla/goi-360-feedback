const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {
  sentimentDistribution,
  feedbackByRegion,
  feedbackByCategory,
  recentFeedback
} = require("../controllers/analyticsController");

const router = express.Router();

router.get(
  "/sentiment",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  sentimentDistribution
);

router.get(
  "/region",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  feedbackByRegion
);

router.get(
  "/category",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  feedbackByCategory
);

router.get(
  "/recent",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  recentFeedback
);

module.exports = router;

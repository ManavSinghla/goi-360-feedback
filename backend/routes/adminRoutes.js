const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const { getDashboardAnalytics } = require("../controllers/adminController");

const router = express.Router();

// Admin dashboard analytics
router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  getDashboardAnalytics
);

module.exports = router;

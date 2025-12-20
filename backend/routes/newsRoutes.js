const express = require("express");
const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews
} = require("../controllers/newsController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Public – users can view news
router.get("/", getAllNews);
router.get("/:id", getNewsById);

// Admin only
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  createNews
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  updateNews
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  deleteNews
);

module.exports = router;

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment
} = require("../controllers/departmentController");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  createDepartment
);

router.get("/", getDepartments);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  updateDepartment
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin", "superadmin"]),
  deleteDepartment
);

module.exports = router;

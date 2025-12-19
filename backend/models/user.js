const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["citizen", "employee", "admin", "superadmin"],
    default: "citizen"
  }
});

module.exports = mongoose.model("User", userSchema);

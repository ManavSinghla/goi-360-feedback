const Feedback = require("../models/feedback");
const Department = require("../models/department");

exports.getDashboardAnalytics = async (req, res) => {
  try {
    const analytics = await Feedback.aggregate([
      {
        $group: {
          _id: "$departmentId",
          avgServiceQuality: { $avg: "$ratings.serviceQuality" },
          avgTransparency: { $avg: "$ratings.transparency" },
          avgResponsiveness: { $avg: "$ratings.responsiveness" },
          totalFeedbacks: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "departments",
          localField: "_id",
          foreignField: "_id",
          as: "department"
        }
      },
      { $unwind: "$department" },
      {
        $project: {
          _id: 0,
          departmentName: "$department.name",
          avgServiceQuality: { $round: ["$avgServiceQuality", 2] },
          avgTransparency: { $round: ["$avgTransparency", 2] },
          avgResponsiveness: { $round: ["$avgResponsiveness", 2] },
          totalFeedbacks: 1
        }
      }
    ]);

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

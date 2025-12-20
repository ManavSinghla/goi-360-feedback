const News = require("../models/News");

// CREATE news
exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ all news
exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ publishedDate: -1 });
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ single news
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(404).json({ message: "News not found" });
  }
};

// UPDATE news
exports.updateNews = async (req, res) => {
  try {
    const updated = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE news
exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

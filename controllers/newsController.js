const News = require('../models/News');

// Δημιουργία νέας είδησης
exports.createNews = async (req, res) => {
  try {
    const { title, content, topic } = req.body;
    const newNews = new News({ title, content, topic });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: 'Error creating news' });
  }
};

// Υποβολή είδησης για έγκριση
exports.submitNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    news.status = 'submitted';
    await news.save();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting news' });
  }
};

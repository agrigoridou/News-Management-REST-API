const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  authorName: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['created', 'approved'], default: 'created' },
  news: { type: mongoose.Schema.Types.ObjectId, ref: 'News' }
});

module.exports = mongoose.model('Comment', CommentSchema);

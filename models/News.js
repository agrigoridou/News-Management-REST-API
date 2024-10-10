const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  publishedAt: { type: Date },
  status: {
    type: String,
    enum: ['created', 'submitted', 'approved', 'published'],
    default: 'created',
  },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('News', NewsSchema);

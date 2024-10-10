const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  parentTopic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  status: { type: String, enum: ['submitted', 'approved'], default: 'submitted' },
});

module.exports = mongoose.model('Topic', TopicSchema);

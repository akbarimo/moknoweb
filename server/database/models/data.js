const mongoose = require('mongoose');

const metaSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  queryCount: { type: Number, default: 0 },
});

const statsSchema = new mongoose.Schema({
  uptime: { type: String, required: true },
});

const querySchema = new mongoose.Schema({
  user: String,
  string: String,
});

const dataSchema = new mongoose.Schema({
  meta: metaSchema,
  stats: statsSchema,
  queries: [querySchema],
});

const dataModel = mongoose.model('mokno', dataSchema);

module.exports = dataModel;

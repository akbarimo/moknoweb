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

const commandsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  info: { type: String },
  enabled: { type: Boolean, default: true },
});

const settingsSchema = new mongoose.Schema({
  commands: [commandsSchema],
  timezone: { type: String, default: 'PST' },
});

const settingsModel = mongoose.model('mokno', settingsSchema);

module.exports = settingsModel;

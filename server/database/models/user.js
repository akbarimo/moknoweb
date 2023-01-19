const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date, required: true, default: new Date() },
});

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;

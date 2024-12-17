const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  contactNumber: String,
  createdAt: { type: Date, default: Date.now },
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;

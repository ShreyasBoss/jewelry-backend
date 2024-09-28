const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Store encrypted password
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, required: true },
  accessLevel: { type: String, enum: ['read-only', 'full-access'], default: 'read-only' },
  department: { type: String },
  branch: { type: String },
  status: { type: String, enum: ['active', 'suspended', 'terminated'], default: 'active' },
  lastLogin: { type: Date },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
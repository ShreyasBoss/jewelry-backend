const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  schemeCode: {
    type: String,
    required: true,
    unique: true
  },
  schemeName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  eligibleItems: {
    type: [String], // Array of eligible items
    required: true
  },
  discountRate: {
    type: Number,
    required: true
  },
  customerGroup: {
    type: String, // Can represent a specific group or segment of customers
    required: true
  },
  redemptionCriteria: {
    type: String,
    required: true
  },
  usageLimit: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Scheme', schemeSchema);

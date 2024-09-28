const mongoose = require('mongoose');

const metalRateSchema = new mongoose.Schema({
  metalType: {
    type: String,
    required: true
  },
  metalPurity: {
    type: String,
    required: true
  },
  marketRate: {
    type: Number,
    required: true
  },
  effectiveDate: {
    type: Date,
    required: true
  },
  vendorSupplier: {
    type: String, // Can be a reference to a Vendor model
    required: true
  },
  currency: {
    type: String, // Example: 'USD', 'INR'
    required: true
  },
  rateUpdateFrequency: {
    type: String, // Example: 'Daily', 'Weekly'
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('MetalRate', metalRateSchema);

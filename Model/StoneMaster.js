const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema({
  stoneType: {
    type: String,
    required: true
  },
  stoneGrade: {
    type: String,
    required: true
  },
  caratWeight: {
    type: Number,
    required: true
  },
  pricePerCarat: {
    type: Number,
    required: true
  },
  vendor: {
    type: String, // Can also be a reference to a Vendor model
    required: true
  },
  cutType: {
    type: String,
    required: true
  },
  clarity: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  certificationDetails: {
    type: String, // Store certification information or a reference to a Certificate model
    required: false
  },
}, { timestamps: true });

module.exports = mongoose.model('Stone', stoneSchema);

const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  warehouseCode: {
    type: String,
    required: true,
    unique: true
  },
  warehouseName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  storageCapacity: {
    type: Number,
    required: true
  },
  occupiedCapacity: {
    type: Number,
    required: true
  },
  inventoryCategories: {
    type: [String], // Array of inventory categories
    required: true
  },
  securityDetails: {
    type: String,
    required: false
  },
  storageConditions: {
    type: String,
    required: false
  },
  operatingHours: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Warehouse', warehouseSchema);

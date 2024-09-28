const mongoose = require('mongoose');

const taxMasterSchema = new mongoose.Schema({
  taxCode: { type: String, required: true, unique: true },
  taxName: { type: String, required: true },
  taxPercentage: { type: Number, required: true },
  taxType: { type: String, required: true },
  applicableItems: String,
  effectiveDate: Date,
  jurisdiction: String,
  exemptions: String,
  taxCalculationMethod: String,
  taxReportingCategory: String,
  notes: String,
});

module.exports = mongoose.model('TaxMaster', taxMasterSchema);

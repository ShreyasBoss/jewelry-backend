const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyId: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  website: { type: String },
  gstTaxId: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  incorporationDate: { type: Date, required: true },
  authorizedSignatory: { type: String, required: true },
  currency: { type: String, required: true },
  financialYear: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  logo: { type: String },  // Store image URL or file path
  bankDetails: { type: String },  // Consider making this more structured if needed
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
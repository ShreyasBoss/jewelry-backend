const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  vendorCode: String,
  vendorName: String,
  contactPerson: String,
  address: String,
  phoneNumber: String,
  email: String,
  website: String,
  gstNumber: String,
  paymentTerms: String,
  bankAccountNo: String,
  bankName: String,
  ifscCode: String,
  branch: String,
  creditLimit: Number,
  leadTime: Number,
  productCategories: [String],
  certification: String,
  vendorRating: Number,
  lastOrderDate: Date,
  purchaseHistory: String,
  notes: String,
});

module.exports = mongoose.model('Vendor', VendorSchema);

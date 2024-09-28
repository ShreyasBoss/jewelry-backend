const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerID: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  contactInfo: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  address: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  dateOfBirth: { type: Date },
  purchaseHistory: { type: Array, default: [] },
  preferredPaymentMethod: {
    type: String,
    enum: ['CASH', 'ONLINE', 'METAL'],
    default: 'CASH'
  },
  creditLimit: { type: Number, default: 0 },
  paymentTerms: { type: String },
  customerGroup: { type: String },
  customPreferences: { type: String },
  referralSource: { type: String },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);

const mongoose = require('mongoose');

const paymentTermSchema = new mongoose.Schema({
  paymentTermCode: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  dueDateCalculation: {
    type: String,
    required: true
  },
  earlyPaymentDiscount: {
    type: Number,
    required: false
  },
  latePaymentFees: {
    type: Number,
    required: false
  },
  applicableCustomers: {
    type: [String], // Array of applicable customer IDs or names
    required: false
  },
  applicableVendors: {
    type: [String], // Array of applicable vendor IDs or names
    required: false
  },
  currency: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('PaymentTerm', paymentTermSchema);

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expenseCode: {
    type: String,
    required: true,
    unique: true
  },
  expenseName: {
    type: String,
    required: true
  },
  expenseType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentDueDate: {
    type: Date,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  expenseAccount: {
    type: String,
    required: true
  },
  invoiceNumber: {
    type: String,
    required: false
  },
  paymentStatus: {
    type: String, // e.g., Paid, Pending, Overdue
    required: true
  },
  notes: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);

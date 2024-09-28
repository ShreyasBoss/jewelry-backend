const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  purchaseId: { type: String, required: true, unique: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },  // Reference to Vendor Master
  purchaseDate: { type: Date, required: true },
  items: [{
    itemCode: { type: String, required: true },
    quantity: { type: Number, required: true },
    purchasePrice: { type: Number, required: true }
  }],
  totalCost: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['paid', 'pending', 'partial'], required: true },
  paymentMethod: { type: String, required: true }, // e.g., bank transfer, cash
  deliveryDate: { type: Date },
  invoiceNumber: { type: String },
  shippingCharges: { type: Number },
  tax: { type: Number },
  purchaseStatus: { type: String, enum: ['completed', 'pending', 'cancelled'], default: 'pending' },
  warehouseLocation: { type: String },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
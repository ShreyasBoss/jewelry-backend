const mongoose = require('mongoose');

const itemMasterSchema = new mongoose.Schema({
  itemCode: { type: String, required: true, unique: true },
  itemName: { type: String, required: true },
  tagName: { type: String, enum: ['Metal', 'Gold', 'Silver', 'Platinum'], required: true },
  itemType: { type: String, enum: ['Metal', 'Stone'], required: true },
  itemGroup: { type: String, enum: ['Branded Jewellery', 'Diamond', 'Gold Jewellery', 'Silver Metal', 'Other'], required: true },
  itemSubGroup: { type: String },
  unit: { type: String, enum: ['Nos', 'Wght'], required: true },
  weight: { type: Number, required: true },
  metalType: { type: String },
  purity: { type: String },
  stoneType: { type: String },
  stoneWeight: { type: Number },
  stoneClarity: { type: String },
  stoneCut: { type: String },
  stoneColor: { type: String },
  certificateDetails: { type: String },
  unitPrice: { type: Number, required: true },
  purchasePrice: { type: Number, required: true },
  costComponents: { type: String },
  stockLevel: { type: Number, required: true },
  minimumStockLevel: { type: Number, required: true },
  reorderLevel: { type: Number, required: true },
  location: { type: String },
  shelfNumber: { type: String },
  vendor: { type: String },
  image: { type: String }, // URL or file path
  barcode: { type: String, unique: true },
  itemStatus: { type: String, enum: ['Available', 'Out of Stock', 'Discontinued'], required: true },
  description: { type: String },
  specialInstructions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('ItemMaster', itemMasterSchema);

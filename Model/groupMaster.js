const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupId: { type: String, required: true, unique: true },
  groupName: { type: String, required: true },
  groupType: { type: String, required: true },  // Customers, Vendors, Products
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  associatedEntities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' }]
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
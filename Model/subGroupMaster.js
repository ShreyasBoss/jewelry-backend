const mongoose = require('mongoose');

const subgroupSchema = new mongoose.Schema({
  subgroupId: { type: String, required: true, unique: true },
  subgroupName: { type: String, required: true },
  parentGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true }, // Reference to Group
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  associatedEntities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' }] // List of related items/customers/vendors
}, { timestamps: true });

module.exports = mongoose.model('Subgroup', subgroupSchema);
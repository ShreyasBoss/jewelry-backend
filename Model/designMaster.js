const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  designCode: { type: String, required: true, unique: true },
  designName: { type: String, required: true },
  designerName: { type: String },
  designCategory: { type: String, required: true }, // Jewelry category (e.g., Traditional, Contemporary)
  image: { type: String }, // Image URL or file path
  materialList: [{ type: String }], // List of materials used in the design
  customizationOptions: { type: Boolean, default: false },
  manufacturingCost: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Design', designSchema);
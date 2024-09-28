const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryId: { type: String, required: true, unique: true },
  categoryName: { type: String, required: true },
  subcategoryName: { type: String, required: true },
  categoryDescription: { type: String },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to parent category
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
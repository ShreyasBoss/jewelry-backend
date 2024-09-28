// models/UOM.js
const mongoose = require('mongoose');

const uomSchema = new mongoose.Schema({
    uomCode: { type: String, required: true, unique: true },
    uomName: { type: String, required: true },
    conversionFactor: { type: Number, required: true },
    decimalPrecision: { type: Number, required: true },
    applicableCategories: { type: [String], required: true },
    uomDescription: { type: String },
    uomSymbol: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('UOM', uomSchema);

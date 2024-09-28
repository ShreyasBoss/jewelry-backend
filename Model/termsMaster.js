const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
    termsCode: { type: String, required: true, unique: true },
    termsDescription: { type: String, required: true },
    applicableCategories: { type: Array, required: true },
    validityPeriod: { type: Date, required: true },
    specialClauses: { type: String }
});

module.exports = mongoose.model('Terms', termsSchema);
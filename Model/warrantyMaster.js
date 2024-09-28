const mongoose = require('mongoose');

const warrantySchema = new mongoose.Schema({
    warrantyCode: { type: String, required: true, unique: true },
    warrantyDescription: { type: String, required: true },
    applicableItems: { type: Array, required: true },
    warrantyPeriod: { type: String, required: true },
    startDate: { type: Date, required: true },
    termsAndConditions: { type: String }
});

module.exports = mongoose.model('Warranty', warrantySchema);
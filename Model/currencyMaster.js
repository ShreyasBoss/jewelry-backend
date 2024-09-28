const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    currencyCode: { type: String, required: true, unique: true },
    currencySymbol: { type: String, required: true },
    conversionRate: { type: Number, required: true },
    effectiveDate: { type: Date, required: true },
    decimalPlaces: { type: Number, required: true }
});

module.exports = mongoose.model('Currency', currencySchema);
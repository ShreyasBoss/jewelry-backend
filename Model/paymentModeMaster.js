const mongoose = require('mongoose');

const paymentModeSchema = new mongoose.Schema({
    paymentModeID: { type: String, required: true, unique: true },
    paymentMode: { type: String, required: true },
    associatedFees: { type: Number },
    paymentProvider: { type: String },
    currency: { type: String }
});

module.exports = mongoose.model('PaymentMode', paymentModeSchema);
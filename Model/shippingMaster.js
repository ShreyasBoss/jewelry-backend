const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
    shippingID: { type: String, required: true, unique: true },
    shippingMethod: { type: String, required: true },
    shippingProvider: { type: String },
    shippingCharges: { type: Number, required: true },
    deliveryTime: { type: String },
    trackingNumber: { type: String },
    shippingZones: { type: String }
});

module.exports = mongoose.model('Shipping', shippingSchema);
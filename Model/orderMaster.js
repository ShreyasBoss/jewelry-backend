const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderID: { type: String, required: true, unique: true },
    customerID: { type: String, required: true },
    orderDate: { type: Date, required: true },
    deliveryDate: { type: Date },
    orderStatus: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    customSpecifications: { type: String },
    paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Partial'], default: 'Pending' },
    totalValue: { type: Number, required: true },
    vendor: { type: String },
    trackingNumber: { type: String }
});

module.exports = mongoose.model('Order', orderSchema);
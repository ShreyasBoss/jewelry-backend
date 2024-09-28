// models/Discount.js
const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    discountCode: {
        type: String,
        required: true,
        unique: true,
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'], // Add other types as needed
        required: true,
    },
    applicableItems: {
        type: [String], // Array of item IDs or names
        required: true,
    },
    minimumPurchase: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    customerEligibility: {
        type: String, // Can be 'all', 'specific' (define as needed)
        enum: ['all', 'specific'],
        default: 'all',
    },
    specialEventDiscounts: {
        type: [String], // Array of event names
        default: [],
    },
}, { timestamps: true });

module.exports = mongoose.model('Discount', DiscountSchema);

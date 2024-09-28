const mongoose = require('mongoose');

const packagingSchema = new mongoose.Schema({
    packagingCode: { type: String, required: true, unique: true },
    packagingType: { type: String, required: true },
    material: { type: String, required: true },
    cost: { type: Number, required: true },
    vendor: { type: String },
    designLogo: { type: String },
    size: { type: String },
    usageType: { type: String }
});

module.exports = mongoose.model('Packaging', packagingSchema);
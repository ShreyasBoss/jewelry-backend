const mongoose = require('mongoose');

const priceMasterSchema = new mongoose.Schema({
  itemCode: { type: String, required: true, unique: true },
  basePrice: { type: Number, required: true },
  discountPrice: Number,
  bulkPricing: Number,
  marketPrice: Number,
  taxDetails: String,
  currency: { type: String, required: true },
  discountPeriod: Date,
  minQuantityForDiscount: Number,
  priceTiers: String,
  effectiveDate: Date,
  historicalPrices: [String],
  priceAdjustmentReason: String
});

module.exports = mongoose.model('PriceMaster', priceMasterSchema);

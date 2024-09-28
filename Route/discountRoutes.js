// routes/discountRoutes.js
const express = require('express');
const router = express.Router();
const DiscountController = require('../Controller/DiscountController');

// Create a new discount
router.post('/', DiscountController.createDiscount);

// Get all discounts
router.get('/', DiscountController.getDiscounts);

// Get a single discount by ID
router.get('/:id', DiscountController.getDiscountById);

// Update a discount
router.put('/:id', DiscountController.updateDiscount);

// Delete a discount
router.delete('/:id', DiscountController.deleteDiscount);

module.exports = router;

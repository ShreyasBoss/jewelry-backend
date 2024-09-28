const express = require('express');
const router = express.Router();
const priceMasterController = require('../Controller/priceController');

// Create a new PriceMaster
router.post('/', priceMasterController.createPriceMaster);

// Get all PriceMasters
router.get('/', priceMasterController.getAllPriceMasters);

// Get a single PriceMaster by ID
router.get('/:id', priceMasterController.getPriceMasterById);

// Update a PriceMaster by ID
router.put('/:id', priceMasterController.updatePriceMaster);

// Delete a PriceMaster by ID
router.delete('/:id', priceMasterController.deletePriceMaster);

module.exports = router;

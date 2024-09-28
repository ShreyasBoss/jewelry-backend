const express = require('express');
const router = express.Router();
const taxMasterController = require('../Controller/taxMasterController');

// Create a new TaxMaster
router.post('/', taxMasterController.createTaxMaster);

// Get all TaxMasters
router.get('/', taxMasterController.getAllTaxMasters);

// Get a single TaxMaster by ID
router.get('/:id', taxMasterController.getTaxMasterById);

// Update a TaxMaster by ID
router.put('/:id', taxMasterController.updateTaxMaster);

// Delete a TaxMaster by ID
router.delete('/:id', taxMasterController.deleteTaxMaster);

module.exports = router;

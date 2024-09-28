const express = require('express');
const router = express.Router();
const purchaseController = require('../Controller/purchaseMasterController');

// CRUD routes for Purchase
router.post('/', purchaseController.createPurchase);
router.get('/', purchaseController.getPurchases);
router.get('/:id', purchaseController.getPurchaseById);
router.put('/:id', purchaseController.updatePurchase);
router.delete('/:id', purchaseController.deletePurchase);

module.exports = router;
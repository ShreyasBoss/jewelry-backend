const express = require('express');
const router = express.Router();
const paymentTermController = require('../Controller/paymentTermController');

// Routes
router.get('/', paymentTermController.getPaymentTerms);
router.get('/:id', paymentTermController.getPaymentTermById);
router.post('/', paymentTermController.createPaymentTerm);
router.put('/:id', paymentTermController.updatePaymentTerm);
router.delete('/:id', paymentTermController.deletePaymentTerm);

module.exports = router;

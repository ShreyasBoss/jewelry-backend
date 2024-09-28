const express = require('express');
const router = express.Router();
const paymentModeController = require('../Controller/paymentModeMasterController');

router.post('/', paymentModeController.createPaymentMode);
router.get('/', paymentModeController.getPaymentModes);
router.get('/:id', paymentModeController.getPaymentModeById);
router.put('/:id', paymentModeController.updatePaymentMode);
router.delete('/:id', paymentModeController.deletePaymentMode);

module.exports = router;
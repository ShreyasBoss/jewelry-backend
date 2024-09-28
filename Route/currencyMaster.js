const express = require('express');
const router = express.Router();
const currencyController = require('../Controller/currencyMasterController');

router.post('/', currencyController.createCurrency);
router.get('/', currencyController.getCurrencies);
router.get('/:id', currencyController.getCurrencyById);
router.put('/:id', currencyController.updateCurrency);
router.delete('/:id', currencyController.deleteCurrency);

module.exports = router;
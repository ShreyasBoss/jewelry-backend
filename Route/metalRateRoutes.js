const express = require('express');
const router = express.Router();
const metalRateController = require('../Controller/metalRateController');

// Routes
router.get('/', metalRateController.getMetalRates);
router.get('/:id', metalRateController.getMetalRateById);
router.post('/', metalRateController.createMetalRate);
router.put('/:id', metalRateController.updateMetalRate);
router.delete('/:id', metalRateController.deleteMetalRate);

module.exports = router;

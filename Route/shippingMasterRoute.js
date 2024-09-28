const express = require('express');
const router = express.Router();
const shippingController = require('../Controller/shippingMasterController');

router.post('/', shippingController.createShipping);
router.get('/', shippingController.getShippings);
router.get('/:id', shippingController.getShippingById);
router.put('/:id', shippingController.updateShipping);
router.delete('/:id', shippingController.deleteShipping);

module.exports = router;
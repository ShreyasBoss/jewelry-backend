const express = require('express');
const router = express.Router();
const warrantyController = require('../Controller/warrantyMasterController');

router.post('/', warrantyController.createWarranty);
router.get('/', warrantyController.getWarranties);
router.get('/:id', warrantyController.getWarrantyById);
router.put('/:id', warrantyController.updateWarranty);
router.delete('/:id', warrantyController.deleteWarranty);

module.exports = router;
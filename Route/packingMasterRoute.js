const express = require('express');
const router = express.Router();
const packagingController = require('../Controller/packingMasterController');

router.post('/', packagingController.createPackaging);
router.get('/', packagingController.getPackagings);
router.get('/:id', packagingController.getPackagingById);
router.put('/:id', packagingController.updatePackaging);
router.delete('/:id', packagingController.deletePackaging);

module.exports = router;
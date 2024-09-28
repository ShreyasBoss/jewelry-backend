// routes/uomRoutes.js
const express = require('express');
const router = express.Router();
const uomController = require('../Controller/uomController');

router.post('/', uomController.createUOM);
router.get('/', uomController.getAllUOMs);
router.get('/:id', uomController.getUOMById);
router.put('/:id', uomController.updateUOM);
router.delete('/:id', uomController.deleteUOM);

module.exports = router;

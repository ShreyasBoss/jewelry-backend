const express = require('express');
const router = express.Router();
const stoneController = require('../Controller/stoneController');

// Routes
router.get('/', stoneController.getStones);
router.get('/:id', stoneController.getStoneById);
router.post('/', stoneController.createStone);
router.put('/:id', stoneController.updateStone);
router.delete('/:id', stoneController.deleteStone);

module.exports = router;

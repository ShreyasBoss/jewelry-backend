const express = require('express');
const router = express.Router();
const warehouseController = require('../Controller/warehouseController');

// Routes
router.get('/', warehouseController.getWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.post('/', warehouseController.createWarehouse);
router.put('/:id', warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;
const express = require('express');
const router = express.Router();
const subgroupController = require('../Controller/subGroupMasterController');

// CRUD routes for Subgroup
router.post('/', subgroupController.createSubgroup);
router.get('/', subgroupController.getSubgroups);
router.get('/:id', subgroupController.getSubgroupById);
router.put('/:id', subgroupController.updateSubgroup);
router.delete('/:id', subgroupController.deleteSubgroup);

module.exports = router;
const express = require('express');
const router = express.Router();
const groupController = require('../Controller/groupMasterController');

// CRUD routes for Group
router.post('/', groupController.createGroup);
router.get('/', groupController.getGroups);
router.get('/:id', groupController.getGroupById);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;
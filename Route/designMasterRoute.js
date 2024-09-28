const express = require('express');
const router = express.Router();
const designController = require('../Controller/designMasterController');

// CRUD routes for Design
router.post('/', designController.createDesign);
router.get('/', designController.getDesigns);
router.get('/:id', designController.getDesignById);
router.put('/:id', designController.updateDesign);
router.delete('/:id', designController.deleteDesign);

module.exports = router;
const express = require('express');
const router = express.Router();
const schemeController = require('../Controller/schemaController');

// Routes
router.get('/', schemeController.getSchemes);
router.get('/:id', schemeController.getSchemeById);
router.post('/', schemeController.createScheme);
router.put('/:id', schemeController.updateScheme);
router.delete('/:id', schemeController.deleteScheme);

module.exports = router;

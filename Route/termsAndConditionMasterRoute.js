const express = require('express');
const router = express.Router();
const termsController = require('../Controller/termsAndConditionMasterController');

router.post('/', termsController.createTerms);
router.get('/', termsController.getTerms);
router.get('/:id', termsController.getTermsById);
router.put('/:id', termsController.updateTerms);
router.delete('/:id', termsController.deleteTerms);

module.exports = router;
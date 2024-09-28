const express = require('express');
const router = express.Router();
const companyController = require('../Controller/companyMasterController');

// CRUD routes for Company
router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);
router.get('/:id', companyController.getCompanyById);
router.put('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);

module.exports = router;
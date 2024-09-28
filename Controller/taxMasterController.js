const TaxMaster = require('../Model/TaxMaster');

// Create a new TaxMaster
exports.createTaxMaster = async (req, res) => {
  try {
    const newTaxMaster = new TaxMaster(req.body);
    const savedTaxMaster = await newTaxMaster.save();
    res.status(201).json(savedTaxMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all TaxMasters
exports.getAllTaxMasters = async (req, res) => {
  try {
    const taxMasters = await TaxMaster.find();
    res.status(200).json(taxMasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single TaxMaster by ID
exports.getTaxMasterById = async (req, res) => {
  try {
    const taxMaster = await TaxMaster.findById(req.params.id);
    if (!taxMaster) {
      return res.status(404).json({ message: 'TaxMaster not found' });
    }
    res.status(200).json(taxMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a TaxMaster by ID
exports.updateTaxMaster = async (req, res) => {
  try {
    const updatedTaxMaster = await TaxMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTaxMaster) {
      return res.status(404).json({ message: 'TaxMaster not found' });
    }
    res.status(200).json(updatedTaxMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a TaxMaster by ID
exports.deleteTaxMaster = async (req, res) => {
  try {
    const deletedTaxMaster = await TaxMaster.findByIdAndDelete(req.params.id);
    if (!deletedTaxMaster) {
      return res.status(404).json({ message: 'TaxMaster not found' });
    }
    res.status(200).json({ message: 'TaxMaster deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

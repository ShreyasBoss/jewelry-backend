const PriceMaster = require('../Model/PriceMaster');

// Create a new PriceMaster
exports.createPriceMaster = async (req, res) => {
  try {
    const newPriceMaster = new PriceMaster(req.body);
    const savedPriceMaster = await newPriceMaster.save();
    res.status(201).json(savedPriceMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all PriceMasters
exports.getAllPriceMasters = async (req, res) => {
  try {
    const priceMasters = await PriceMaster.find();
    res.status(200).json(priceMasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single PriceMaster by ID
exports.getPriceMasterById = async (req, res) => {
  try {
    const priceMaster = await PriceMaster.findById(req.params.id);
    if (!priceMaster) {
      return res.status(404).json({ message: 'PriceMaster not found' });
    }
    res.status(200).json(priceMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a PriceMaster by ID
exports.updatePriceMaster = async (req, res) => {
  try {
    const updatedPriceMaster = await PriceMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPriceMaster) {
      return res.status(404).json({ message: 'PriceMaster not found' });
    }
    res.status(200).json(updatedPriceMaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a PriceMaster by ID
exports.deletePriceMaster = async (req, res) => {
  try {
    const deletedPriceMaster = await PriceMaster.findByIdAndDelete(req.params.id);
    if (!deletedPriceMaster) {
      return res.status(404).json({ message: 'PriceMaster not found' });
    }
    res.status(200).json({ message: 'PriceMaster deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

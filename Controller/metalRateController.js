const MetalRate = require('../Model/MetalRateMaster');

// Get all metal rates
exports.getMetalRates = async (req, res) => {
  try {
    const metalRates = await MetalRate.find();
    res.status(200).json(metalRates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific metal rate by ID
exports.getMetalRateById = async (req, res) => {
  try {
    const metalRate = await MetalRate.findById(req.params.id);
    if (!metalRate) {
      return res.status(404).json({ message: 'Metal Rate not found' });
    }
    res.status(200).json(metalRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new metal rate
exports.createMetalRate = async (req, res) => {
  const { metalType, metalPurity, marketRate, effectiveDate, vendorSupplier, currency, rateUpdateFrequency } = req.body;
  
  try {
    const metalRate = new MetalRate({
      metalType,
      metalPurity,
      marketRate,
      effectiveDate,
      vendorSupplier,
      currency,
      rateUpdateFrequency
    });
    
    await metalRate.save();
    res.status(201).json(metalRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a metal rate by ID
exports.updateMetalRate = async (req, res) => {
  try {
    const updatedMetalRate = await MetalRate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMetalRate) {
      return res.status(404).json({ message: 'Metal Rate not found' });
    }
    res.status(200).json(updatedMetalRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a metal rate by ID
exports.deleteMetalRate = async (req, res) => {
  try {
    const metalRate = await MetalRate.findByIdAndDelete(req.params.id);
    if (!metalRate) {
      return res.status(404).json({ message: 'Metal Rate not found' });
    }
    res.status(200).json({ message: 'Metal Rate deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

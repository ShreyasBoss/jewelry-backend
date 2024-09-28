const Scheme = require('../Model/schemaMaster');

// Get all schemes
exports.getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.status(200).json(schemes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific scheme by ID
exports.getSchemeById = async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.status(200).json(scheme);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new scheme
exports.createScheme = async (req, res) => {
  const { schemeCode, schemeName, startDate, endDate, eligibleItems, discountRate, customerGroup, redemptionCriteria, usageLimit, notes } = req.body;
  
  try {
    const scheme = new Scheme({
      schemeCode,
      schemeName,
      startDate,
      endDate,
      eligibleItems,
      discountRate,
      customerGroup,
      redemptionCriteria,
      usageLimit,
      notes
    });
    
    await scheme.save();
    res.status(201).json(scheme);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a scheme by ID
exports.updateScheme = async (req, res) => {
  try {
    const updatedScheme = await Scheme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.status(200).json(updatedScheme);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a scheme by ID
exports.deleteScheme = async (req, res) => {
  try {
    const scheme = await Scheme.findByIdAndDelete(req.params.id);
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.status(200).json({ message: 'Scheme deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Design = require('../Model/designMaster');

// Create a new Design
exports.createDesign = async (req, res) => {
  try {
    const design = new Design(req.body);
    await design.save();
    res.status(201).json(design);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Designs
exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.find();
    res.status(200).json(designs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Design by ID
exports.getDesignById = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) return res.status(404).json({ error: 'Design not found' });
    res.status(200).json(design);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Design
exports.updateDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!design) return res.status(404).json({ error: 'Design not found' });
    res.status(200).json(design);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Design
exports.deleteDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndDelete(req.params.id);
    if (!design) return res.status(404).json({ error: 'Design not found' });
    res.status(200).json({ message: 'Design deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
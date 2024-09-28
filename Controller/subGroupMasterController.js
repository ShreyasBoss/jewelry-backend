const Subgroup = require('../Model/subGroupMaster');

// Create a new Subgroup
exports.createSubgroup = async (req, res) => {
  try {
    const subgroup = new Subgroup(req.body);
    await subgroup.save();
    res.status(201).json(subgroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Subgroups
exports.getSubgroups = async (req, res) => {
  try {
    const subgroups = await Subgroup.find().populate('parentGroupId');
    res.status(200).json(subgroups);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Subgroup by ID
exports.getSubgroupById = async (req, res) => {
  try {
    const subgroup = await Subgroup.findById(req.params.id).populate('parentGroupId');
    if (!subgroup) return res.status(404).json({ error: 'Subgroup not found' });
    res.status(200).json(subgroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Subgroup
exports.updateSubgroup = async (req, res) => {
  try {
    const subgroup = await Subgroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subgroup) return res.status(404).json({ error: 'Subgroup not found' });
    res.status(200).json(subgroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Subgroup
exports.deleteSubgroup = async (req, res) => {
  try {
    const subgroup = await Subgroup.findByIdAndDelete(req.params.id);
    if (!subgroup) return res.status(404).json({ error: 'Subgroup not found' });
    res.status(200).json({ message: 'Subgroup deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Stone = require('../Model/StoneMaster');

// Get all stones
exports.getStones = async (req, res) => {
  try {
    const stones = await Stone.find();
    res.status(200).json(stones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific stone by ID
exports.getStoneById = async (req, res) => {
  try {
    const stone = await Stone.findById(req.params.id);
    if (!stone) {
      return res.status(404).json({ message: 'Stone not found' });
    }
    res.status(200).json(stone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new stone
exports.createStone = async (req, res) => {
  const { stoneType, stoneGrade, caratWeight, pricePerCarat, vendor, cutType, clarity, color, certificationDetails } = req.body;
  
  try {
    const stone = new Stone({
      stoneType,
      stoneGrade,
      caratWeight,
      pricePerCarat,
      vendor,
      cutType,
      clarity,
      color,
      certificationDetails
    });
    
    await stone.save();
    res.status(201).json(stone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a stone by ID
exports.updateStone = async (req, res) => {
  try {
    const updatedStone = await Stone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStone) {
      return res.status(404).json({ message: 'Stone not found' });
    }
    res.status(200).json(updatedStone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a stone by ID
exports.deleteStone = async (req, res) => {
  try {
    const stone = await Stone.findByIdAndDelete(req.params.id);
    if (!stone) {
      return res.status(404).json({ message: 'Stone not found' });
    }
    res.status(200).json({ message: 'Stone deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controllers/uomController.js
const UOM = require('../Model/UOMMaster');

// Create UOM
exports.createUOM = async (req, res) => {
    try {
        const uom = new UOM(req.body);
        await uom.save();
        res.status(201).json(uom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all UOMs
exports.getAllUOMs = async (req, res) => {
    try {
        const uoms = await UOM.find();
        res.status(200).json(uoms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get UOM by ID
exports.getUOMById = async (req, res) => {
    try {
        const uom = await UOM.findById(req.params.id);
        if (!uom) return res.status(404).json({ message: 'UOM not found' });
        res.status(200).json(uom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update UOM
exports.updateUOM = async (req, res) => {
    try {
        const uom = await UOM.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!uom) return res.status(404).json({ message: 'UOM not found' });
        res.status(200).json(uom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete UOM
exports.deleteUOM = async (req, res) => {
    try {
        const uom = await UOM.findByIdAndDelete(req.params.id);
        if (!uom) return res.status(404).json({ message: 'UOM not found' });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

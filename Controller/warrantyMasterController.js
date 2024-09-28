const Warranty = require('../Model/warrantyMaster');

// Create new warranty
exports.createWarranty = async (req, res) => {
    try {
        const warranty = new Warranty(req.body);
        await warranty.save();
        res.status(201).json(warranty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all warranties
exports.getWarranties = async (req, res) => {
    try {
        const warranties = await Warranty.find();
        res.status(200).json(warranties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get warranty by ID
exports.getWarrantyById = async (req, res) => {
    try {
        const warranty = await Warranty.findById(req.params.id);
        if (!warranty) return res.status(404).json({ message: 'Warranty not found' });
        res.json(warranty);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update warranty by ID
exports.updateWarranty = async (req, res) => {
    try {
        const updatedWarranty = await Warranty.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedWarranty);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete warranty by ID
exports.deleteWarranty = async (req, res) => {
    try {
        await Warranty.findByIdAndDelete(req.params.id);
        res.json({ message: 'Warranty deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
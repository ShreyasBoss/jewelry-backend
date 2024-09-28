const Packaging = require('../Model/packagingMaster');

// Create new packaging
exports.createPackaging = async (req, res) => {
    try {
        const packaging = new Packaging(req.body);
        await packaging.save();
        res.status(201).json(packaging);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all packaging options
exports.getPackagings = async (req, res) => {
    try {
        const packagings = await Packaging.find();
        res.status(200).json(packagings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get packaging by ID
exports.getPackagingById = async (req, res) => {
    try {
        const packaging = await Packaging.findById(req.params.id);
        if (!packaging) return res.status(404).json({ message: 'Packaging not found' });
        res.json(packaging);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update packaging by ID
exports.updatePackaging = async (req, res) => {
    try {
        const updatedPackaging = await Packaging.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPackaging);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete packaging by ID
exports.deletePackaging = async (req, res) => {
    try {
        await Packaging.findByIdAndDelete(req.params.id);
        res.json({ message: 'Packaging deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
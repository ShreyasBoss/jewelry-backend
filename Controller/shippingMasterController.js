const Shipping = require('../Model/shippingMaster');

// Create new shipping option
exports.createShipping = async (req, res) => {
    try {
        const shipping = new Shipping(req.body);
        await shipping.save();
        res.status(201).json(shipping);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all shipping options
exports.getShippings = async (req, res) => {
    try {
        const shippings = await Shipping.find();
        res.status(200).json(shippings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get shipping option by ID
exports.getShippingById = async (req, res) => {
    try {
        const shipping = await Shipping.findById(req.params.id);
        if (!shipping) return res.status(404).json({ message: 'Shipping option not found' });
        res.json(shipping);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update shipping option by ID
exports.updateShipping = async (req, res) => {
    try {
        const updatedShipping = await Shipping.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedShipping);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete shipping option by ID
exports.deleteShipping = async (req, res) => {
    try {
        await Shipping.findByIdAndDelete(req.params.id);
        res.json({ message: 'Shipping option deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
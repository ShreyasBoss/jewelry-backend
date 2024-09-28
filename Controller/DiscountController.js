// controllers/DiscountController.js
const Discount = require('../Model/DiscountMaster');

// Create a new discount
exports.createDiscount = async (req, res) => {
    try {
        const discount = new Discount(req.body);
        await discount.save();
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all discounts
exports.getDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single discount by ID
exports.getDiscountById = async (req, res) => {
    try {
        const discount = await Discount.findById(req.params.id);
        if (!discount) return res.status(404).json({ error: 'Discount not found' });
        res.status(200).json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a discount
exports.updateDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!discount) return res.status(404).json({ error: 'Discount not found' });
        res.status(200).json(discount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a discount
exports.deleteDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByIdAndDelete(req.params.id);
        if (!discount) return res.status(404).json({ error: 'Discount not found' });
        res.status(200).json({ message: 'Discount deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const Currency = require('../Model/currencyMaster');

// Create new currency
exports.createCurrency = async (req, res) => {
    try {
        const currency = new Currency(req.body);
        await currency.save();
        res.status(201).json(currency);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all currencies
exports.getCurrencies = async (req, res) => {
    try {
        const currencies = await Currency.find();
        res.status(200).json(currencies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get currency by ID
exports.getCurrencyById = async (req, res) => {
    try {
        const currency = await Currency.findById(req.params.id);
        if (!currency) return res.status(404).json({ message: 'Currency not found' });
        res.json(currency);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update currency by ID
exports.updateCurrency = async (req, res) => {
    try {
        const updatedCurrency = await Currency.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCurrency);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete currency by ID
exports.deleteCurrency = async (req, res) => {
    try {
        await Currency.findByIdAndDelete(req.params.id);
        res.json({ message: 'Currency deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
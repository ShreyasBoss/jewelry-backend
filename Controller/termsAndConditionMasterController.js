const Terms = require('../Model/termsMaster');

// Create new terms & conditions
exports.createTerms = async (req, res) => {
    try {
        const terms = new Terms(req.body);
        await terms.save();
        res.status(201).json(terms);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all terms
exports.getTerms = async (req, res) => {
    try {
        const terms = await Terms.find();
        res.status(200).json(terms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get terms by ID
exports.getTermsById = async (req, res) => {
    try {
        const terms = await Terms.findById(req.params.id);
        if (!terms) return res.status(404).json({ message: 'Terms not found' });
        res.json(terms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update terms by ID
exports.updateTerms = async (req, res) => {
    try {
        const updatedTerms = await Terms.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTerms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete terms by ID
exports.deleteTerms = async (req, res) => {
    try {
        await Terms.findByIdAndDelete(req.params.id);
        res.json({ message: 'Terms deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const PaymentMode = require('../Model/paymentModeMaster');

// Create new payment mode
exports.createPaymentMode = async (req, res) => {
    try {
        const paymentMode = new PaymentMode(req.body);
        await paymentMode.save();
        res.status(201).json(paymentMode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all payment modes
exports.getPaymentModes = async (req, res) => {
    try {
        const paymentModes = await PaymentMode.find();
        res.status(200).json(paymentModes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get payment mode by ID
exports.getPaymentModeById = async (req, res) => {
    try {
        const paymentMode = await PaymentMode.findById(req.params.id);
        if (!paymentMode) return res.status(404).json({ message: 'Payment Mode not found' });
        res.json(paymentMode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update payment mode by ID
exports.updatePaymentMode = async (req, res) => {
    try {
        const updatedPaymentMode = await PaymentMode.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPaymentMode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete payment mode by ID
exports.deletePaymentMode = async (req, res) => {
    try {
        await PaymentMode.findByIdAndDelete(req.params.id);
        res.json({ message: 'Payment Mode deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
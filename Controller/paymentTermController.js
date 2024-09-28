const PaymentTerm = require('../Model/paymentTermMaster');

// Get all payment terms
exports.getPaymentTerms = async (req, res) => {
  try {
    const paymentTerms = await PaymentTerm.find();
    res.status(200).json(paymentTerms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific payment term by ID
exports.getPaymentTermById = async (req, res) => {
  try {
    const paymentTerm = await PaymentTerm.findById(req.params.id);
    if (!paymentTerm) {
      return res.status(404).json({ message: 'Payment Term not found' });
    }
    res.status(200).json(paymentTerm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new payment term
exports.createPaymentTerm = async (req, res) => {
  const { paymentTermCode, description, dueDateCalculation, earlyPaymentDiscount, latePaymentFees, applicableCustomers, applicableVendors, currency, notes } = req.body;
  
  try {
    const paymentTerm = new PaymentTerm({
      paymentTermCode,
      description,
      dueDateCalculation,
      earlyPaymentDiscount,
      latePaymentFees,
      applicableCustomers,
      applicableVendors,
      currency,
      notes
    });
    
    await paymentTerm.save();
    res.status(201).json(paymentTerm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a payment term by ID
exports.updatePaymentTerm = async (req, res) => {
  try {
    const updatedPaymentTerm = await PaymentTerm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPaymentTerm) {
      return res.status(404).json({ message: 'Payment Term not found' });
    }
    res.status(200).json(updatedPaymentTerm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a payment term by ID
exports.deletePaymentTerm = async (req, res) => {
  try {
    const paymentTerm = await PaymentTerm.findByIdAndDelete(req.params.id);
    if (!paymentTerm) {
      return res.status(404).json({ message: 'Payment Term not found' });
    }
    res.status(200).json({ message: 'Payment Term deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

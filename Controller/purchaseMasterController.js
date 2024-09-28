const Purchase = require('../Model/purchaseMaster');

// Create a new Purchase
exports.createPurchase = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Purchases
exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate('vendorId');
    res.status(200).json(purchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Purchase by ID
exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id).populate('vendorId');
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Purchase
exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Purchase
exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndDelete(req.params.id);
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    res.status(200).json({ message: 'Purchase deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Sale = require('../Model/saleMaster');

// Create a new Sale
exports.createSale = async (req, res) => {
  try {
    const sale = new Sale(req.body);
    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Sales
exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate('customerId salespersonId');
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Sale by ID
exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id).populate('customerId salespersonId');
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.status(200).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Sale
exports.updateSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.status(200).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Sale
exports.deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
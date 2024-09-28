const ItemMaster = require('../Model/itemMaster');
const multer = require('multer');

// File upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const upload = multer({ storage: storage }).single('image');

// Create Item
exports.createItem = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).send({ message: 'File upload failed', error: err });
    }
    try {
      const newItem = new ItemMaster({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        tagName: req.body.tagName,
        itemType: req.body.itemType,
        itemGroup: req.body.itemGroup,
        itemSubGroup: req.body.itemSubGroup,
        unit: req.body.unit,
        weight: req.body.weight,
        metalType: req.body.metalType,
        purity: req.body.purity,
        stoneType: req.body.stoneType,
        stoneWeight: req.body.stoneWeight,
        stoneClarity: req.body.stoneClarity,
        stoneCut: req.body.stoneCut,
        stoneColor: req.body.stoneColor,
        certificateDetails: req.body.certificateDetails,
        unitPrice: req.body.unitPrice,
        purchasePrice: req.body.purchasePrice,
        costComponents: req.body.costComponents,
        stockLevel: req.body.stockLevel,
        minimumStockLevel: req.body.minimumStockLevel,
        reorderLevel: req.body.reorderLevel,
        location: req.body.location,
        shelfNumber: req.body.shelfNumber,
        vendor: req.body.vendor,
        image: req.file ? req.file.path : null,
        barcode: req.body.barcode,
        itemStatus: req.body.itemStatus,
        description: req.body.description,
        specialInstructions: req.body.specialInstructions,
      });
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};

// Read Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await ItemMaster.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read Single Item
exports.getItemById = async (req, res) => {
  try {
    const item = await ItemMaster.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await ItemMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Item
exports.deleteItem = async (req, res) => {
  try {
    await ItemMaster.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

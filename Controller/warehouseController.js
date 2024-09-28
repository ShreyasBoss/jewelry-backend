const Warehouse = require('../Model/warehouseMaster');

// Get all warehouses
exports.getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find();
    res.status(200).json(warehouses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific warehouse by ID
exports.getWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);
    if (!warehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.status(200).json(warehouse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new warehouse
exports.createWarehouse = async (req, res) => {
  const { warehouseCode, warehouseName, address, contactPerson, phoneNumber, storageCapacity, occupiedCapacity, inventoryCategories, securityDetails, storageConditions, operatingHours, notes } = req.body;
  
  try {
    const warehouse = new Warehouse({
      warehouseCode,
      warehouseName,
      address,
      contactPerson,
      phoneNumber,
      storageCapacity,
      occupiedCapacity,
      inventoryCategories,
      securityDetails,
      storageConditions,
      operatingHours,
      notes
    });
    
    await warehouse.save();
    res.status(201).json(warehouse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a warehouse by ID
exports.updateWarehouse = async (req, res) => {
  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWarehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a warehouse by ID
exports.deleteWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
    if (!warehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.status(200).json({ message: 'Warehouse deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

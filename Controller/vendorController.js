const Vendor = require('../Model/VendorMaster');

exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.json(newVendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).send('Vendor not found');
    res.json(vendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Vendor deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

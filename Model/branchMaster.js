const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    branchCode: { type: String, required: true, unique: true },
    branchName: { type: String, required: true },
    address: { type: String, required: true },
    contactInformation: { type: String, required: true },
    manager: { type: String },
    openingHours: { type: String },
    salesTargets: { type: Number },
    stockLevels: { type: Number },
    employeeList: { type: Array }
});

module.exports = mongoose.model('Branch', branchSchema);
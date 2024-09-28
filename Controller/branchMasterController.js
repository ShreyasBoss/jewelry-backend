const Branch = require('../Model/branchMaster');

// Create new branch
exports.createBranch = async (req, res) => {
    try {
        const branch = new Branch(req.body);
        await branch.save();
        res.status(201).json(branch);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all branches
exports.getBranches = async (req, res) => {
    try {
        const branches = await Branch.find();
        res.status(200).json(branches);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findById(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        res.json(branch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update branch by ID
exports.updateBranch = async (req, res) => {
    try {
        const updatedBranch = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBranch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete branch by ID
exports.deleteBranch = async (req, res) => {
    try {
        await Branch.findByIdAndDelete(req.params.id);
        res.json({ message: 'Branch deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
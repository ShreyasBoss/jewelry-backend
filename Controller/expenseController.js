const Expense = require('../Model/ExpenseMaster');

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new expense
exports.createExpense = async (req, res) => {
  const { expenseCode, expenseName, expenseType, amount, paymentDueDate, vendor, paymentMethod, department, expenseAccount, invoiceNumber, paymentStatus, notes } = req.body;
  
  try {
    const expense = new Expense({
      expenseCode,
      expenseName,
      expenseType,
      amount,
      paymentDueDate,
      vendor,
      paymentMethod,
      department,
      expenseAccount,
      invoiceNumber,
      paymentStatus,
      notes
    });
    
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an expense by ID
exports.updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

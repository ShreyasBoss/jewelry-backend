const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  contactInformation: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  salaryDetails: { type: Number, required: true },
  commissionRate: { type: Number, required: true },
  bonusEligibility: { type: Boolean, default: false },
  permissions: [String],
  performanceMetrics: String,
  attendanceRecord: String,
  employeeAppraisalHistory: String,
  trainingHistory: String,
  emergencyContactInformation: String,
  employmentStatus: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
});

module.exports = mongoose.model('Employee', employeeSchema);

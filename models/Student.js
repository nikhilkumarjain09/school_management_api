const { required } = require('joi');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId,required:true, ref: 'School' },
  name: { type: String, required: true },
  age: Number,
  grade: String,
  parentContact: String,
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

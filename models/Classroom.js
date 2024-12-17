const { required } = require('joi');
const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId,required:true, ref: 'School' },
  name: { type: String, required: true },
  capacity: Number,
  resources: [String],
  createdAt: { type: Date, default: Date.now },
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;

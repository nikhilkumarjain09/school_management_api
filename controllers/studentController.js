const Student = require('../models/Student');

// Create a student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get students by school
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ schoolId: req.params.schoolId });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

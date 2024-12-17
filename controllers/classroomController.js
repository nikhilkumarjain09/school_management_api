const Classroom = require('../models/Classroom');

// Create a classroom
exports.createClassroom = async (req, res) => {
  try {
    const classroom = new Classroom(req.body);
    await classroom.save();
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get classrooms by school
exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find({ schoolId: req.params.schoolId });
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

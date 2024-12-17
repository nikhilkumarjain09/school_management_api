const School = require('../models/School');

// Create a school
exports.createSchool = async (req, res) => {
  try {
    const school = new School(req.body);
    await school.save();
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all schools
exports.getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single school
exports.getSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a school
exports.updateSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a school
exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.status(200).json({ message: 'School deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

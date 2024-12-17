const express = require('express');
const { createStudent, getStudents } = require('../controllers/studentController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole('schooladmin'), createStudent);
router.post('/', authenticateJWT, authorizeRole('superadmin'), createStudent);
router.get('/:schoolId', getStudents);

module.exports = router;

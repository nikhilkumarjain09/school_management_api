const express = require('express');
const { createClassroom, getClassrooms } = require('../controllers/classroomController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole('superadmin'), createClassroom);
router.post('/', authenticateJWT, authorizeRole('schooladmin'), createClassroom);

router.get('/:schoolId', getClassrooms);

module.exports = router;

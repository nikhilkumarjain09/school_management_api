const express = require('express');
const { createSchool, getSchools, getSchool, updateSchool, deleteSchool } = require('../controllers/schoolController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole('superadmin'), createSchool);
router.get('/', getSchools);
router.get('/:id', getSchool);
router.put('/:id', authenticateJWT, authorizeRole('superadmin'), updateSchool);
router.delete('/:id', authenticateJWT, authorizeRole('superadmin'), deleteSchool);

module.exports = router;

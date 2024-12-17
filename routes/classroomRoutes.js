const express = require('express');
const { createClassroom, getClassrooms } = require('../controllers/classroomController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();
/**
 * @swagger
 * /api/classrooms:
 *   post:
 *     summary: Add Classroom.
 *     description: Add Classroom.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the student
 *               grade:
 *                 type: string
 *                 description: grade of the student
 *               parentcontact:
 *                  type:string
 *                  description:Contact number of parent
 *     responses:
 *       201:
 *         description: Successfully created the classroom.
 */
router.post('/', authenticateJWT, authorizeRole('superadmin'), createClassroom);
router.post('/', authenticateJWT, authorizeRole('schooladmin'), createClassroom);
/**
 * @swagger
 * /api/classrooms/{schoolId}:
 *   get:
 *     summary: Get School Classrooms.
 *     description: Get School Classrooms.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the student
 *               grade:
 *                 type: string
 *                 description: grade of the student
 *               parentcontact:
 *                  type:string
 *                  description:Contact number of parent
 *     responses:
 *       201:
 *         description: Successfully created the classroom.
 */
router.get('/:schoolId', getClassrooms);

module.exports = router;

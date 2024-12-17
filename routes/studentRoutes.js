const express = require('express');
const { createStudent, getStudents, getStudent,updateStudent,deleteStudent} = require('../controllers/studentController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();
/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new Student
 *     description: Create a new Student by providing name ,schoolid,age etc.
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
 *         description: Successfully created the school.
 */
router.post('/', authenticateJWT, authorizeRole('schooladmin'), createStudent);
router.post('/', authenticateJWT, authorizeRole('superadmin'), createStudent);
/**
 * @swagger
 * /api/students/{schoolId}:
 *   post:
 *     summary: Get Students of school.
 *     description: Get Students of school.
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
 *         description: Successfully created the school.
 */
router.get('/:schoolId', getStudents);
/**
 * @swagger
 * /api/students/{studentId}:
 *   get:
 *     summary: Get Student by id.
 *     description: Get Student by id.
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
 *         description: Successfully created the school.
 */
router.get('/:id', getStudent);
/**
 * @swagger
 * /api/students/{studentId}:
 *   put:
 *     summary: Update Student.
 *     description: Update Student.
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
 *         description: Successfully created the school.
 */
router.put('/:id', updateStudent);
/**
 * @swagger
 * /api/students/{studentId}:
 *   delete:
 *     summary: Delete Student.
 *     description: Delete Student.
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
 *         description: Successfully created the school.
 */
router.delete('/:id', deleteStudent);
module.exports = router;

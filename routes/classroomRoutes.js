const express = require('express');
const { createClassroom, getClassrooms,updateClassroom,deleteClassroom } = require('../controllers/classroomController');
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
/**
 * @swagger
 * /api/classrooms/{classroomId}:
 *   put:
 *     summary: Update School Classrooms.
 *     description: Update School Classrooms.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the class
 *               grade:
 *                 type: string
 *                 description: grade of the student
 *               parentcontact:
 *                  type:string
 *                  description:Contact number of parent
 *     responses:
 *       201:
 *         description: Successfully updated the classroom.
 */
router.put('/:id', updateClassroom);
/**
 * @swagger
 * /api/classrooms/{classroomId}:
 *   delete:
 *     summary: Delete Classrooms.
 *     description: Delete Classrooms.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the classroom
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
router.delete('/:id', deleteClassroom);

module.exports = router;

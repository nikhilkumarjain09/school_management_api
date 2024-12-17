const express = require('express');
const { createSchool, getSchools, getSchool, updateSchool, deleteSchool } = require('../controllers/schoolController');
const authenticateJWT = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

const router = express.Router();
/**
 * @swagger
 * /api/schools:
 *   post:
 *     summary: Create a new school
 *     description: Create a new school by providing name and address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the school
 *               address:
 *                 type: string
 *                 description: Address of the school
 *     responses:
 *       201:
 *         description: Successfully created the school.
 */
router.post('/', authenticateJWT, authorizeRole('superadmin'), createSchool);
/**
 * @swagger
 * /api/schools:
 *   get:
 *     summary: Retrieve all schools
 *     description: Retrieve a list of all schools.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of schools.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: School ID
 *                   name:
 *                     type: string
 *                     description: Name of the school
 *                   address:
 *                     type: string
 *                     description: Address of the school
 */
router.get('/', getSchools);
/**
 * @swagger
 * /api/schools:
 *   get:
 *     summary: Get Schools all.
 *     description: Get Schools all.
 *     parameters:
 *       - in: School id
 *         name: School id
 *         required: true
 *         description: School id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Name of the school
 *               password:
 *                 type: string
 *                 description: Address of the school
 *     responses:
 *       201:
 *         description: Successfully created the school.
 */
router.get('/:id', getSchool);
/**
 * @swagger
 * /api/schools/{schoolId}:
 *   get:
 *     summary: Retrieve school by id
 *     description: Retrieve a school by id.
 *     responses:
 *       200:
 *         description: Successfully retrieved school.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: School ID
 *                   name:
 *                     type: string
 *                     description: Name of the school
 *                   address:
 *                     type: string
 *                     description: Address of the school
 */
router.get('/', getSchools);
/**
 * @swagger
 * /api/schools/{schoolId}:
 *   put:
 *     summary: Update School
 *     description: Update School.
 *     parameters:
 *       - in: School id
 *         name: School id
 *         required: true
 *         description: School id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the school
 *               address:
 *                 type: string
 *                 description: Address of the school
 *               contact:
 *                 type:string
 *                 description:Contact Number
 *     responses:
 *       201:
 *         description: Successfully created the school.
 */
router.put('/:id', authenticateJWT, authorizeRole('superadmin'), updateSchool);
/**
 * @swagger
 * /api/schools/{schoolId}:
 *   delete:
 *     summary: Delete School
 *     description: Delete School.
 *     parameters:
 *       - in: School id
 *         name: School id
 *         required: true
 *         description: School id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Successfully created the school.
 */
router.delete('/:id', authenticateJWT, authorizeRole('superadmin'), deleteSchool);

module.exports = router;

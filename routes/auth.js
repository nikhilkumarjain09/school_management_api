const express = require('express');
const User = require('../models/User');
const { generateToken } = require('../config/jwt');
const router = express.Router();
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Generate Auth Token
 *     description: Generate Auth Token.
 *     parameters:
 *       - in: username
 *         name: username
 *         required: true
 *         description: Username
 *         schema:
 *           type: string
 *       - in: password
 *         name: password
 *         required: true
 *         description: Password
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
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    console.log("Token  genretaed::" ,token);
    res.json({ token });
});
router.post('/register',async(req,res)=>{
    const { username, password, role } = req.body;

    // Input validation
    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Please provide username, password, and role' });
    }
  
    // Check if the username already exists
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Create a new user
      const newUser = new User({
        username,
        password,  // Password will be hashed in the model before saving
        role,
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Respond with success
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          username: newUser.username,
          role: newUser.role,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;

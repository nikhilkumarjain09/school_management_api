const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require("./routes/auth");

// Import the MongoDB connection function
const { connectDB } = require('./config');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes for managing schools, classrooms, and students
app.use("/api/auth", authRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/students', studentRoutes);

// Connect to the MongoDB database
connectDB();

// Set the port from the environment variable or default to 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
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
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'School Management API',
      version: '1.0.0',
      description: 'API for managing Schools, Classrooms, Students, etc.',
    },
    basePath: '/',
  },
  apis: ['./routes/*.js'], // This is where you define your API routes in your codebase
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

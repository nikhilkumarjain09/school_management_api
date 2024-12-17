const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load environment variables from .env file
dotenv.config();

// MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected...');
    const users = [
        {
          username: "superadmin",
          password: "superadmin",
          role: "superadmin",
        },
        {
          username: "adminstrator",
          password: "adminstrator",
          role: "admin",
        },
        {
          username: "schooladmin",
          password: "schooladmin",
          role: "schooladmin",
        },
      ];
  
      // Hash passwords and save users
    //   for (const userData of users) {
    //     const user = new User(userData);
    //     await user.save();
    //     console.log(`User ${user.username} created`);
    //   }
  
    //   console.log("Users seeded successfully");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
};

module.exports = { connectDB };

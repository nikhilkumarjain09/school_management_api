# SCHOOL MANAGEMENT SYSTEM API

This is a RESTful API for a School Management System that allows managing Schools, Classrooms, and Students. The API supports user authentication, CRUD operations, and role-based access control.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Create, update, and delete student records.
- Manage classrooms and students.
- User authentication and authorization.
- API endpoints for interacting with the frontend      
  application.
- Scalable and maintainable codebase.

## Technologies Used

- Node.js
- Express.js
- MongoDB 
- Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

## Getting Started
### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 14 + and npm installed on your development machine.
- MongoDB installed and running.

### Installation

1. Clone this repository:
```sh
  git clone https://github.com/iamtonmoy0/node-express-school-management-system.git
```

SCHOOL-MANAGEMENT-SERVER
Navigate to the project directory:
```sh
.
├── config/
│   ├── jwt.js
├── controllers/
│   ├── classroomController.js
│   ├── schoolController.js
│   ├── studentController.js
├── middlewares/
│   │   ├──authMiddleware.js
│   │   ├──roleMiddleware.js
├── models/
│   ├── Classroom.js
│   ├── School.js
│   ├── Student.js
│   ├── User.js
├── routes/
│   ├── auth.js
│   ├── classroomRoutes.js
│   ├── schoolRoutes.js
│   ├── studentRoutes.js
├── .env
├── app.js //root file
├── config.js //mongoconnect
├── .gitignore
├── package.json
├── package-lock.json
├── README.md 
.
```
2. Install Dependencies:
```sh
  npm install 
```
3. Set Environment Variables
Create a .env file and add your configurations:
```sh
  PORT=3000
  MONGODB_URI=your_mongo_uri
  JWT_SECRET=your_jwt_secret 
```
4. Run MongoDB
   Make sure MongoDB is running locally or provide your Atlas connection string.
5. Run app.js by running command:
```sh
  nodemon app
```
### Usage
Once the server is running, interact with the API using tools like Postman or integrate it into your application.

### API Endpoint
  **Authentication**
  - `POST /api/auth/login`

  **Schools**
  - `POST /api/schools`
  - Create a school.
    
  - `GET /api/schools/`
  - Get all school.
    
  - `GET /api/schools/{schoolId}`
  - Get School detail by id.
    
  - `PUT /api/schools/{schoolId}`
  - Update School by id.
    
  - `DELETE /api/schools/{schoolId}`
  - Delete School by id.

  **Classrooms**
  - `POST /api/classrooms`
  - Create a Classroom.
    
  - `GET /api/classrooms/`
  - Get all Classrooms.
    
  - `GET /api/classrooms/{schoolId}`
  - Get Classrooms detail of school by school id.
    
  - `PUT /api/classrooms/{schoolId}`
  - Update classrooms by school id.
    
  - `DELETE /api/classrooms/{schoolId}`
  - Delete classrooms by school id.
    
  **Students**
  - `POST /api/students/{schoolId}`
  - Create a students in school.
    
  - `GET /api/students/{schoolId}`
  - Get all students in a school.
    
  - `PUT /api/students/{schoolId}/{studentId}`
  - Update classrooms by school id and student id.
    
  - `DELETE /api/students/{schoolId/{studentId}}`
  - Delete student by school id and student id.    
### Contributing
Contributions are welcome!
  - Fork the repository.
  - Create a new branch: git checkout -b feature-name.
  - Commit your changes: git commit -m "Add feature".
  - Push to your branch: git push origin feature-name.
  - Open a pull request.
### License
This project is licensed under the MIT License.
### Contact
Email: nikhil.wevois@gmail.com
GitHub: nikhilkumarjain09


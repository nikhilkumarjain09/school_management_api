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
2. Open Terminal in project root directory and run comman:
```sh
  npm install
  
```
3. Run app.js by running command:
```sh
  nodemon app
  
```

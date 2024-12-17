# School Management API - Test Cases

This document outlines the test cases for the School Management API, including authentication, role-based access, and CRUD operations for entities like `Schools`, `Students`, and `Classrooms`.

---

## Table of Contents
1. [Authentication and Token Generation](#1-authentication-and-token-generation)
2. [School CRUD Operations](#2-school-crud-operations)
3. [Student CRUD Operations](#3-student-crud-operations)
4. [Classroom CRUD Operations](#4-classroom-crud-operations)
5. [Error Handling](#5-error-handling)
6. [Test Execution Instructions](#test-execution-instructions)

---

## **1. Authentication and Token Generation**

### **1.1 Generate Access Token - Valid User Credentials**
- **Description**: Verify that a valid user (username/password) generates an access token.  
- **Endpoint**: `POST /api/auth/login`  
- **Request Body**:
  ```json
  {
    "username": "superadmin",
    "password": "ValidPassword123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "access_token": "<token>",
    "role": "superadmin"
  }
  ```
- **Status**: ✅ Pass  

---

### **1.2 Generate Access Token - Invalid User Credentials**
- **Description**: Verify that an invalid username/password combination fails authentication.  
- **Endpoint**: `POST /api/auth/login`  
- **Request Body**:
  ```json
  {
    "username": "superadmin",
    "password": "WrongPassword"
  }
  ```
- **Expected Response**:
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- **Status**: ✅ Pass  

---

### **1.3 Generate Access Token - Role Verification from Database**
- **Description**: Verify that the correct user role is fetched from the database.  
- **Endpoint**: `POST /api/auth/login`  
- **Request Body**:
  ```json
  {
    "username": "schooladmin",
    "password": "Password123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "access_token": "<token>",
    "role": "schooladmin"
  }
  ```
- **Status**: ✅ Pass  

---

## **2. School CRUD Operations**

### **2.1 Create School - Superadmin Role**
- **Description**: Verify that a superadmin can create a school.  
- **Endpoint**: `POST /api/schools`  
- **Request Body**:
  ```json
  {
    "name": "ABC School",
    "address": "123 Street"
  }
  ```
- **Expected Response**:
  ```json
  {
    "id": "school123",
    "name": "ABC School",
    "address": "123 Street"
  }
  ```
- **Status**: ✅ Pass  

---

### **2.2 Create School - Unauthorized Role**
- **Description**: Verify that a schooladmin cannot create a school.  
- **Endpoint**: `POST /api/schools`  
- **Request Body**:
  ```json
  {
    "name": "XYZ School",
    "address": "456 Avenue"
  }
  ```
- **Expected Response**:
  ```json
  {
    "error": "Forbidden: Insufficient permissions"
  }
  ```
- **Status**: ✅ Pass  

---

## **3. Student CRUD Operations**

### **3.1 Create Student - Superadmin/Schooladmin Role**
- **Description**: Verify that both superadmin and schooladmin can create a student.  
- **Endpoint**: `POST /api/students`  
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "classroomId": "classroom123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "id": "student123",
    "name": "John Doe",
    "classroomId": "class123"
  }
  ```
- **Status**: ✅ Pass  

---

### **3.2 Create Student - Unauthorized Role**
- **Description**: Verify that unauthorized roles cannot create a student.  
- **Endpoint**: `POST /api/students`  
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "classroomId": "classroom123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "error": "Forbidden: Insufficient permissions"
  }
  ```
- **Status**: ✅ Pass  

---

## **4. Classroom CRUD Operations**

### **4.1 Create Classroom - Superadmin/Schooladmin Role**
- **Description**: Verify that superadmin or schooladmin can create a classroom.  
- **Endpoint**: `POST /api/classrooms`  
- **Request Body**:
  ```json
  {
    "name": "Class A",
    "schoolId": "school123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "id": "class123",
    "name": "Class A",
    "schoolId": "school123"
  }
  ```
- **Status**: ✅ Pass  

---

## **5. Error Handling**

### **5.1 Access Protected Endpoint Without Token**
- **Description**: Verify that accessing a protected endpoint without a token fails.  
- **Endpoint**: `GET /api/students`  
- **Expected Response**:
  ```json
  {
    "error": "Unauthorized: Token missing"
  }
  ```
- **Status**: ✅ Pass  

---

## **Test Execution Instructions**

To run the test cases, use a testing framework like **Jest** or **Mocha**.

```bash
npm install
npm test
```

The test results will be displayed in the terminal or saved in a `test-results.json` file.

---

## Summary of Test Cases
| **Category**                  | **Number of Test Cases** |
|-------------------------------|---------------------------|
| Authentication                | 3                        |
| School CRUD Operations        | 2                        |
| Student CRUD Operations       | 3                        |
| Classroom CRUD Operations     | 2                        |
| Error Handling                | 1                        |
| **Total**                     | **11**                   |

---

### Notes:
- Ensure proper environment variables are set for database and authentication configurations.
- Test cases include both positive and negative scenarios for comprehensive coverage.

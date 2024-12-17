# Database Schema Design

## Entities and Relationships

### 1. Users
- **id**: ObjectId, primary key
- **username**: String, required
- **password**: String, required

### 2. Schools
- **id**: ObjectId, primary key
- **name**: String, required
- **address**: String
- **contactNumber**: String
- **createdAt**: Date

### 3. Students
- **id**: ObjectId, primary key
- **schoolId**: String, required
- **name**: String, required
- **age**: Number
- **grade**: String
- **parentContact**: String
- **createdAt**: Date


### 3. Classrooms
- **id**: ObjectId, primary key
- **schoolId**: String, required
- **name**: String, required
- **capacity**: Number
- **resources**: List
- **createdAt**: Date

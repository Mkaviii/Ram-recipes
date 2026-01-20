## 🧠 RAM Management API

This project is a RESTful API for managing RAM products with JWT-based authentication.

### Features
- User registration & login
- JWT authentication
- Protected CRUD operations
- MongoDB with Mongoose
- Postman-tested endpoints

### Public Routes
- GET /api/rams

### Protected Routes (JWT Required)
- GET /api/rams/:id
- POST /api/rams
- PUT /api/rams/:id
- DELETE /api/rams/:id

Authorization is enforced using middleware that validates Bearer tokens.

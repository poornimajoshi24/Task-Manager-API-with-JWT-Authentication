# Task Management REST API

A secure and scalable **RESTful backend API** built using **Node.js, Express, and MongoDB** that allows users to register, authenticate, and manage their tasks.  
The API uses **JWT-based authentication** and ensures that users can access **only their own data**.

---

## 🚀 Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Create and fetch user-specific tasks
- MongoDB database integration
- Clean MVC architecture

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Security
- JSON Web Tokens (JWT)
- bcrypt

### Tools & Utilities
- Nodemon
- dotenv
- Thunder Client / Postman

---

## 📁 Project Structure


Task-Management-REST-API/
│
├── src/
│   ├── server.js          # Server entry point
│   ├── app.js             # Express app setup
│   │
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   │
│   └── middleware/
│       └── auth.middleware.js
│
├── .env        ✅ HERE (root)
├── package.json
├── node_modules/


---

## ⚙️ How the Project Works

1. User registers with email and password
2. Password is securely hashed and stored in MongoDB
3. User logs in and receives a JWT token
4. Token is sent in request headers for protected routes
5. Middleware verifies the token
6. User can create and view their own tasks only

---

## 🔐 Authentication Flow

- JWT token is generated on login
- Token is passed using:


- Middleware validates token and attaches user info to request

---

## 📌 API Endpoints

### Authentication

#### Register User




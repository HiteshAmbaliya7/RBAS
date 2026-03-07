Role-Based Access System (RBAS)

A backend application built using Node.js, Express.js, and MongoDB that implements Role-Based Access Control (RBAC).
This system allows different users to access different resources based on their assigned roles.

---

🚀 Features

- User Registration & Login
- JWT Authentication
- Role-Based Authorization (RBAC)
- Secure API routes
- MongoDB database integration
- Clean and scalable backend structure

---

🛠️ Tech Stack

- Node.js – Backend runtime
- Express.js – Web framework
- MongoDB – Database
- Mongoose – ODM
- JWT (JSON Web Token) – Authentication
- bcrypt – Password hashing

---

📂 Project Structure

RBAS/
│
├── models/        # Database models
├── routes/        # API routes
├── controllers/   # Business logic
├── middleware/    # Auth & role middleware
├── config/        # Database config
├── server.js      # Main entry file
└── package.json

---

⚙️ Installation & Setup

1. Clone the repository:

git clone https://github.com/HiteshAmbaliya7/RBAS.git

2. Navigate to project folder:

cd RBAS

3. Install dependencies:

npm install

4. Create a ".env" file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

5. Run the server:

npm start

---

🔐 Roles Example

- Admin – Full access
- User – Limited access
- Other roles – Can be extended easily

Authorization is handled using middleware based on user roles.

---

📌 API Example

- Register user
- Login user
- Protected routes with role validation

---

🎯 Purpose

This project is built for learning and implementing:

- Authentication
- Authorization
- Secure backend architecture
- Real-world role-based access systems

---

👨‍💻 Author

Hitesh Ambaliya
GitHub: https://github.com/HiteshAmbaliya7
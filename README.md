# 🏠 Real Estate Property Management Web Application

A full-stack real estate management platform where authenticated users can manage property listings with features like add, delete, search, and Update.

## 🚀 Features Implemented

### 🔐 User Authentication
- User **Signup and Login** functionality
- JWT-based **secure authentication**
- **Protected routes**: only authenticated users can access core features
- **Logout** clears the JWT token

### 🏡 Property Management
- **Add Property** (title, location, price)
- **Delete Property** (only user's own listings)
- **Search Property** by title or location or price
- **Property List Table** with:
  - Property title
  - Price
  - Location
- **Success message on add/delete** operations
- **Separate pages** for Add Property and Property List

## 🧰 Tech Stack Used

| Layer        | Technology                |
|--------------|---------------------------|
| Frontend     | React.js (Hooks, Functional Components) |
| Backend      | Node.js + Express.js       |
| Database     | MongoDB + Mongoose         |
| Auth         | JWT (JSON Web Tokens)      |
| Styling      | Basic CSS (Tailwind optional) |

🛠️ Project Setup Instructions
Follow the steps below to run the project locally:

✅ 1. Clone the Repository
       git clone https://github.com/your-username/real-estate-app.git
       cd real-estate-app
✅ 2. Set Up the Backend
       cd backend
       npm install
 Then start the backend server:
       npm start
Server will run at: http://localhost:5000
✅ 3. Set Up the Frontend
Open a new terminal and run:
       cd frontend
       npm install
       npm start
Frontend will run at: http://localhost:3000
✅ 4. Login & Use the App
     Go to http://localhost:3000
Signup or login
Add, delete, and search properties
✅ 5. Tools Used
-MongoDB Compass
-Postman (for testing APIs)
-React Dev Tools (for debugging frontend)
-VS Code (recommended editor)

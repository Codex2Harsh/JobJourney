# 🚀 JobJourney — Job Application Tracker (MERN Stack)

**JobJourney** is a full-stack web application built using the **MERN stack (MongoDB, Express, React, Node.js)** that helps users track their job applications through different stages of the hiring process.

The application uses **JWT (JSON Web Token) authentication** to ensure secure login and user-specific data management.

---

## 📌 Features

- 🔐 Secure authentication using **JWT**
- 📝 Add, update, and delete job applications  
- 📊 Track jobs in different stages:
  - Applied  
  - Incoming Rounds  
  - Interview  
  - Job Offer  
- 🎨 Clean and responsive UI  
- 🔄 Full CRUD operations  
- 🌐 REST API backend  

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- CSS Modules  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  

---

## 🔐 Authentication (JWT Flow)
1. User signs up or logs in  
2. Backend generates a **JWT token**  
3. Token is stored in localStorage  
4. Every protected request sends the token in headers  
5. Backend verifies token before granting access  

---
## ▶️ How to Run the Project

### **1️⃣ Start Backend**
```bash
cd backend
npm install
npm run dev
```
### **2️⃣ Start Frontend**
```bash
cd frontend
npm install
npm run dev
```


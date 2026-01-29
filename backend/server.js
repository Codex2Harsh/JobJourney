require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Test route
app.get("/", (req,res)=>{
  res.send("Backend is running...");
});

app.listen(process.env.PORT, ()=> console.log("Server running",process.env.PORT));

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

console.log(process.env.MONGO_URI);

app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoutes);

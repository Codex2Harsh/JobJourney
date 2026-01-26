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

app.listen(process.env.PORT, ()=> console.log("Server running"));

const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

console.log(process.env.MONGO_URI);
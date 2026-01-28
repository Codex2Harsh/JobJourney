const auth = require("../middleware/auth");
const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// CREATE job
router.post("/", auth, async (req, res) => {
  const job = await Job.create({ ...req.body, userId: req.user.id });
  res.json(job);
});

// READ jobs
router.get("/", auth, async (req, res) => {
  const jobs = await Job.find({ userId: req.user.id });
  res.json(jobs);
});

// UPDATE job
router.put("/:id", async (req,res)=>{
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(job);
});

// DELETE job
router.delete("/:id", async (req,res)=>{
  await Job.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

module.exports = router;
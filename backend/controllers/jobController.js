const Job = require("../models/Job");

exports.getJobs = async (req,res)=> {
  const jobs = await Job.find();
  res.json(jobs);
};

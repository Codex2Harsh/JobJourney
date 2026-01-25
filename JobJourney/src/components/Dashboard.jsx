import { useState } from 'react'
import { useEffect } from "react";
import NavComp from './Navbar'
import StatusCards from './StatusCards';
import AddJobForm from './AddJobForm';

let Dashboard = ({ onLogOut, userEmail }) => {
  const [jobs, setjobs] = useState(() => {
    const savedjobs = localStorage.getItem("jobs");
    return savedjobs ? JSON.parse(savedjobs) : [
      { id: 1, company: "Google", position: "SDE", location: "Bangalore", type: "Internship", date: "22/1/2025", status: "Applied" },
      { id: 2, company: "Microsoft", position: "SDE", location: "Hyderabad", type: "Full Time", date: "10/2/2025", status: "Interview" },
      { id: 3, company: "Amazon", position: "SDE", location: "Delhi", type: "Internship", date: "15/2/2025", status: "Incoming Rounds" },
      { id: 4, company: "Meta", position: "SDE", location: "Remote", type: "Full Time", date: "20/2/2025", status: "Job Offer" },
    ]
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const updateStatus = (id, status) => {
    setjobs(jobs.map(job =>
      job.id === id ? { ...job, status } : job
    ));
  };
  //to display the job form
  const [showForm, setshowForm] = useState(false);
  // to functionalize the delete button
  const deleteJob = (id) => {
    setjobs(jobs.filter(job => job.id != id));
  }
  //to add a new job using addjobbtn
  const [formData, setFormData] = useState({
  company: "",
  position: "",
  location: "",
  type: "",
  status: "Applied"
  });
//fetching the value in order from inputs
const handleChange = (e)=>{
  const{name,value} = e.target;
  setFormData(prev=>({...prev,[name]:value}));
}
//passing the value to parent
const addInput=(e)=>{
  //avoidign refresh
  e.preventDefault();
  getItem(formData);
  //resetting form
  setFormData({
    company: "",
    position: "",
    location: "",
    type: "",
    status: "Applied"
  });

  if (editingJob) {
    onClosebtn();
  }
}
  //to update an existing card.
  const [editingJob, setEditingJob] = useState(null);
  const handleEdit = (job) => {
    setEditingJob(job);
    setshowForm(true);
  };
  return (
    <>
      <NavComp onAdClick={() => setshowForm(true)} onLogOut={onLogOut} userEmail={userEmail} />
      <StatusCards jobs={jobs} updateStatus={updateStatus} deleteJob={deleteJob} onEdit={handleEdit} />
      {showForm && <AddJobForm onClosebtn={() => setshowForm(false)} getItem={getItem} editingJob={editingJob} />}
    </>
  );
}
export default Dashboard;
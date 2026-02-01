import { useState } from 'react'
import { useEffect } from "react";
import NavComp from './Navbar'
import StatusCards from './StatusCards';
import AddJobForm from './AddJobForm';
import axios from "axios";

let Dashboard = ({ onLogOut, userEmail }) => {
  const [jobs, setjobs] = useState([]);
useEffect(() => {
  axios.get("http://localhost:5000/api/jobs", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(res => setjobs(res.data));
}, []);


  const updateStatus = async (id, status) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/jobs/${id}`, { status }, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setjobs(prev => prev.map(job => job._id === id ? res.data : job));
  } catch (err) {
    console.log("Status update error:", err);
  }
};
useEffect(() => {
  console.log("Jobs state:", jobs);
}, [jobs]);

  //updating status backend
  const updateJob = async (id, updatedData) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/jobs/${id}`, updatedData, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setjobs(prev => prev.map(job => job._id === id ? res.data : job));
  } catch (err) {
    console.log("Update error:", err);
  }
};

  //to display the job form
  const [showForm, setshowForm] = useState(false);
  const deleteJob = async (id) => {
  await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
    headers: { Authorization: localStorage.getItem("token") }
  });
  setjobs(prev => prev.filter(job => job._id !== id));
};
//updating on backend
const addJob = async (formData) => {
  try {
    const res = await axios.post("http://localhost:5000/api/jobs", formData, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setjobs(prev => [...prev, res.data]);
  } catch (err) {
    console.log("Add job error:", err);
  }
};

console.log("Jobs state:", jobs);

  //to update an existing card.
  const [editingJob, setEditingJob] = useState(null);
  const handleEdit = (job) => {
    setEditingJob(job);
    setshowForm(true);
  };
  return (
    <>
      <NavComp onAdClick={() => {setEditingJob(null);setshowForm(true)}} onLogOut={onLogOut} userEmail={userEmail} />
      <StatusCards jobs={jobs} updateStatus={updateStatus} deleteJob={deleteJob} onEdit={handleEdit} />
      {showForm && <AddJobForm onClosebtn={() => {setshowForm(false);setEditingJob(null)}} addJob={addJob} updateJob={updateJob} editingJob={editingJob} />}
    </>
  );
}
export default Dashboard;
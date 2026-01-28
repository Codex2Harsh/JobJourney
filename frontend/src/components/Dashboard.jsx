import { useState } from 'react'
import { useEffect } from "react";
import NavComp from './Navbar'
import StatusCards from './StatusCards';
import AddJobForm from './AddJobForm';
import axios from "axios";

let Dashboard = ({ onLogOut, userEmail }) => {
  // const [jobs, setjobs] = useState(() => {
  //   const savedjobs = localStorage.getItem("jobs");
  //   return savedjobs ? JSON.parse(savedjobs) : [
  //     { id: 1, company: "Google", position: "SDE", location: "Bangalore", type: "Internship", date: "22/1/2025", status: "Applied" },
  //     { id: 2, company: "Microsoft", position: "SDE", location: "Hyderabad", type: "Full Time", date: "10/2/2025", status: "Interview" },
  //     { id: 3, company: "Amazon", position: "SDE", location: "Delhi", type: "Internship", date: "15/2/2025", status: "Incoming Rounds" },
  //     { id: 4, company: "Meta", position: "SDE", location: "Remote", type: "Full Time", date: "20/2/2025", status: "Job Offer" },
  //   ]
  // });
  const [jobs, setjobs] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("jobs", JSON.stringify(jobs));
  // }, [jobs]);

useEffect(() => {
  axios.get("http://localhost:5000/api/jobs", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(res => setjobs(res.data));
}, []);


  // const updateStatus = (id, status) => {
  //   setjobs(jobs.map(job =>
  //     job.id === id ? { ...job, status } : job
  //   ));
  // };

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
  // to functionalize the delete button
  // const deleteJob = (id) => {
  //   setjobs(jobs.filter(job => job.id != id));
  // }
  //delete job backend 
  const deleteJob = async (id) => {
  await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
    headers: { Authorization: localStorage.getItem("token") }
  });
  setjobs(prev => prev.filter(job => job._id !== id));
};

  //to add a new job using addjobbtn
  // const [formData, setFormData] = useState({
  // company: "",
  // position: "",
  // location: "",
  // type: "",
  // status: "Applied"
  // });
//fetching the value in order from inputs
// const handleChange = (e)=>{
//   const{name,value} = e.target;
//   setFormData(prev=>({...prev,[name]:value}));
// }
//passing the value to parent
// const addInput=(e)=>{
//   //avoidign refresh
//   e.preventDefault();
//   // getItem(formData);
//   //resetting form
//   setFormData({
//     company: "",
//     position: "",
//     location: "",
//     type: "",
//     status: "Applied"
//   });

//   if (editingJob) {
//     onClosebtn();
//   }
// }
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
      <NavComp onAdClick={() => setshowForm(true)} onLogOut={onLogOut} userEmail={userEmail} />
      <StatusCards jobs={jobs} updateStatus={updateStatus} deleteJob={deleteJob} onEdit={handleEdit} />
      {showForm && <AddJobForm onClosebtn={() => setshowForm(false)} addJob={addJob} updateJob={updateJob} editingJob={editingJob} />}
    </>
  );
}
export default Dashboard;
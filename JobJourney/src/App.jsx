import { useState } from 'react'
import { useEffect } from "react";
import './App.css'
import NavComp from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import StatusCards from './components/StatusCards';
import LogInPg from './components/LogInPg';
import LoginForm from './loginForm';

function App() {
  const [jobs,setjobs] = useState(()=>{
    const savedjobs = localStorage.getItem("jobs");
    return savedjobs? JSON.parse(savedjobs):[
  { id: 1, company: "Google", position: "SDE", location: "Bangalore", type: "Internship", date: "22/1/2025", status: "Applied" },
  { id: 2, company: "Microsoft", position: "SDE", location: "Hyderabad", type: "Full Time", date: "10/2/2025", status: "Interview" },
  { id: 3, company: "Amazon", position: "SDE", location: "Delhi", type: "Internship", date: "15/2/2025", status: "Incoming Rounds" },
  { id: 4, company: "Meta", position: "SDE", location: "Remote", type: "Full Time", date: "20/2/2025", status: "Job Offer" },
]});

useEffect(()=>{
  localStorage.setItem("jobs", JSON.stringify(jobs));
},[jobs]);

const updateStatus = (id, status) => {
  setjobs(jobs.map(job =>
    job.id === id ? { ...job, status } : job
  ));
};
return (
  <>
      <div>
    <NavComp />
    <StatusCards jobs = {jobs} updateStatus={updateStatus}/>  
    <LogInPg></LogInPg>
    <LoginForm></LoginForm>
      </div>
    </>
  )
}

export default App

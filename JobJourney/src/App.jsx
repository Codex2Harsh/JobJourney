import { useState } from 'react'
import { useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPg from './components/LogInPg';
import Dashboard from './components/Dashboard';
function App() {
  // for login page
  const[showLogIn, setshowLogIn] = useState(false);
  // for email disply on navbar
  const[userEmail, setUserEmail] = useState(()=>{
    const savedMails = localStorage.getItem("userEmail");
    return savedMails? JSON.parse(savedMails):("")});
  useEffect(()=>{
  localStorage.setItem("userEmail", JSON.stringify(userEmail));
},[userEmail]);
return (
  <>
      <div>
        {
          showLogIn ?
          <LogInPg onLogIn={()=>setshowLogIn(false)} setUserEmail={setUserEmail} />:
          <Dashboard onLogOut={()=>setshowLogIn(true)} userEmail={userEmail} />
        }
      </div>
  </>
  )
}

export default App

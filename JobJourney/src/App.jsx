import { useState } from 'react'
import './App.css'
import NavComp from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import StatusCards from './components/StatusCards';


function App() {
  return (
    <>
      <div>
          <NavComp />
          <StatusCards />  
      </div>
    </>
  )
}

export default App

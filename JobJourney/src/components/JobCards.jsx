import style from "./JobCards.module.css"
import { MdOutlineModeEdit } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBriefcase } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
let JobCards = ({job,updateStatus, deleteJob})=>{
  return (
    <div className={`${style.cards}`}>
      <div className={`${style.Jobinfo}`}>
        <div className={`${style.companyName}`}>{job.company}</div>
        <div className={`${style.position}`}>{job.position}</div>
        <div className={`${style.location}`}> <MdLocationPin /> {job.location}</div>
        <div className={`${style.jobtype}`}> <FaBriefcase /> {job.type}</div>
        <div className={`${style.dates}`}> <FaCalendarAlt /> {job.date}</div>
        <div className={style.statusBox}>
       <label className={style.statusLabel}>Status</label>
        <select className={style.statusSelect}
          value={job.status}
          onChange={(e) => updateStatus(job.id, e.target.value)}>
          <option>Applied</option>
          <option>Incoming Rounds</option>
          <option>Interview</option>
          <option>Job Offer</option>
          
        </select>
      </div>

      </div>
      <div className={`${style.editBtns}`}>
        <div className={`${style.edit}`}><MdOutlineModeEdit /></div>
        <div className={`${style.delete} btn btn-outline-danger`} onClick ={()=>deleteJob(job.id)}  ><i className="bi bi-trash"></i></div>
      </div>
    </div>
  )
}
export default JobCards
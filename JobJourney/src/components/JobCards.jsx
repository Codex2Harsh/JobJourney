import style from "./JobCards.module.css"
import { MdOutlineModeEdit } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBriefcase } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
let JobCards = ()=>{
  return (
    <div className={`${style.cards}`}>
      <div className={`${style.Jobinfo}`}>
        <div className={`${style.companyName}`}>Google</div>
        <div className={`${style.position}`}>SDE</div>
        <div className={`${style.location}`}> <MdLocationPin /> Banglore</div>
        <div className={`${style.jobtype}`}> <FaBriefcase /> Internship</div>
        <div className={`${style.dates}`}> <FaCalendarAlt /> 22/1/2025</div>
        <div className={style.statusBox}>
       <label className={style.statusLabel}>Status</label>
        <select className={style.statusSelect}>
          <option>Applied</option>
          <option>Incoming Rounds</option>
          <option>Interview</option>
          <option>Job Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      </div>
      <div className={`${style.editBtns}`}>
        <div className={`${style.edit}`}><MdOutlineModeEdit /></div>
        <div className={`${style.delete} btn btn-outline-danger`}><i className="bi bi-trash"></i></div>
      </div>
    </div>
  )
}
export default JobCards
// Declarative rendering, here react handles how the ui will look 
import style from "./StatusCards.module.css"
import JobCards from "./JobCards"
const columnNames = ["Applied", "Incoming Rounds", "Interview", "Job Offer"];
let StatusCards = ({ jobs, updateStatus, deleteJob, onEdit }) => {
  return (
    <div className={style.stageGrid}>
      {columnNames.map(status => (
        <div key={status} className={style.column}>
          {/* assign the css props for them */}
         <div className={`${style.toAll} 
          ${status === "Applied" ? style.applied : ""} 
          ${status === "Incoming Rounds" ? style.rounds : ""} 
          ${status === "Interview" ? style.interview : ""} 
          ${status === "Job Offer" ? style.offers : ""}`}>
            {/* rendering how they'll appear inside cards*/}
          <h2 className={style.statusRep}>{status}</h2>
            <div className={style.info}>
              {jobs.filter(job => job.status === status).length} applications
            </div>
          </div>
          {jobs.filter(job => job.status === status).map(job => (
              <JobCards key={job._id} job={job} updateStatus={updateStatus} deleteJob ={deleteJob}  onEdit={onEdit}/>
            ))}
        </div>))}
    </div>
  )
}
export default StatusCards;

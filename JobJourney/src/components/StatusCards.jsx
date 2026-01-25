// import style from "./StatusCards.module.css"
// import JobCards from "./JobCards"
// let StatusCards = ({jobs, updateStatus})=>{
//   return(
//    <div className="d-flex gap-5 flex-wrap">
//   <div className={`${style.toAll} ${style.applied}`}>
//     <h2 className={`${style.statusRep} `}>
//       Applied
//       </h2>
//     <div className={style.info}>
//       0 appllications</div>
//   </div>
//   <div className={`${style.toAll} ${style.rounds}`}>
//     <h2 className={`${style.statusRep} `}>
//       Incoming Rounds
//       </h2>
//     <div className={style.info}>
//       0 appllications</div>
//   </div>
//   <div className={`${style.toAll}  ${style.interview}`}>
//     <h2 className={`${style.statusRep}`}>
//       Interview
//       </h2>
//     <div className={style.info}>
//       0 appllications</div>
//   </div>
//   <div className={`${style.toAll} ${style.offers}`}>
//     <h2 className={`${style.statusRep} `}>
//       Job Offers
//       </h2>
//     <div className={style.info}>
//       0 appllications</div>
//   </div>
//   {/* Job Cards */}
//   {jobs.filter(job => job.status === "Applied")
//   .map(job => <JobCards key={job.id} job={job} updateStatus={updateStatus} />)}
//   {jobs.filter(job => job.status === "Incoming Rounds")
//   .map(job => <JobCards key={job.id} job={job} updateStatus={updateStatus}/>)}
//   {jobs.filter(job => job.status === "Interview")
//   .map(job => <JobCards key={job.id} job={job} updateStatus={updateStatus}/>)}
//   {jobs.filter(job => job.status === "Job Offer")
//   .map(job => <JobCards key={job.id} job={job} updateStatus={updateStatus}/>)}
// </div>
//   )
// }
// export default StatusCards
//above is the basic code stating manual configuration of items
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
          <div className={`${style.toAll} ${status === "Applied" ? style.applied : ""}${status === "Incoming Rounds" ? style.rounds : ""}${status === "Interview" ? style.interview : ""}${status === "Job Offer" ? style.offers : ""}`}>
            {/* rendering how they'll appear inside cards*/}
          <h2 className={style.statusRep}>{status}</h2>
            <div className={style.info}>
              {jobs.filter(job => job.status === status).length} applications
            </div>
          </div>
          {jobs.filter(job => job.status === status).map(job => (
              <JobCards key={job.id} job={job} updateStatus={updateStatus} deleteJob ={deleteJob}  onEdit={onEdit}/>
            ))}
        </div>))}
    </div>
  )
}
export default StatusCards;

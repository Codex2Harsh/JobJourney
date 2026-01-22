import style from "./StatusCards.module.css"
import JobCards from "./JobCards"
let StatusCards = ()=>{
  return(
   <div className="d-flex gap-5 flex-wrap">
  <div className={`${style.toAll} ${style.applied}`}>
    <h2 className={`${style.statusRep} `}>
      Applied
      </h2>
    <div className={style.info}>
      0 appllications</div>
  </div>
  <div className={`${style.toAll} ${style.rounds}`}>
    <h2 className={`${style.statusRep} `}>
      Incoming Rounds
      </h2>
    <div className={style.info}>
      0 appllications</div>
  </div>
  <div className={`${style.toAll}  ${style.interview}`}>
    <h2 className={`${style.statusRep}`}>
      Interview
      </h2>
    <div className={style.info}>
      0 appllications</div>
  </div>
  <div className={`${style.toAll} ${style.offers}`}>
    <h2 className={`${style.statusRep} `}>
      Job Offers
      </h2>
    <div className={style.info}>
      0 appllications</div>
  </div>
  {/* Job Cards */}
  <div className={`${style.to} `}>
     <JobCards />
  </div>
  <div className={`${style.to} `}>
     <JobCards />
  </div>
  <div className={`${style.to} `}>
     <JobCards />
  </div>
  <div className={`${style.to} `}>
     <JobCards />
  </div>
 
</div>
  )
}
export default StatusCards
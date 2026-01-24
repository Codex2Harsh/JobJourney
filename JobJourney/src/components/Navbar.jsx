import style from "./Navbar.module.css"
import { IoMdAdd } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
let NavComp = ({onAdClick, onLogOut, userEmail})=>{
    return (
      <div className={style.containerNav}>
        <div className={style.titleMail}> 
        <h1 className={style.appName}>JobJourney</h1>
        <div className={style.Email}>{userEmail}</div>
        </div>
        <div className={style.buttons}>
          <button className={`${style.AddJob} btn btn-primary btn-lg`} onClick={onAdClick} > 
          <IoMdAdd className={style.lgbtn}/> Add Job
          </button>
          <button className={`${style.logout} btn btn-danger btn-lg`} onClick={onLogOut} > <LuLogOut className={style.lgbtn} /> Logout</button>
        </div>
      </div>
    )
}
export default NavComp;

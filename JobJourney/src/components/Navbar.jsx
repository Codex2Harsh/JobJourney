import style from "./Navbar.module.css"
import { IoMdAdd } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
let NavComp = ()=>{
    return (
      <div className={style.containerNav}>
        <div className={style.titleMail}> 
        <h1 className={style.appName}>JobJourney</h1>
        <div className={style.Email}>abc@email.com</div>
        </div>
        <div className={style.buttons}>
          <button className={`${style.AddJob} btn btn-primary btn-lg`}> <IoMdAdd className={style.lgbtn}/> Add Job
          </button>
          <button className={`${style.logout} btn btn-danger btn-lg`}> <LuLogOut className={style.lgbtn}/> Logout</button>
        </div>
      </div>
    )
}
export default NavComp;

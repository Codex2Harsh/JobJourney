import {useState} from "react";
import styles from"./LogInpg.module.css"
import { IoBriefcaseSharp } from "react-icons/io5";
let LogInPg = ({onLogIn, setUserEmail}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const handler=()=>{
    let valid = true;
    setEmailError("");
    setPassError("");
    if(!email){
      setEmailError("Enter a valid email.")
      valid = false;
    }else if (!email.endsWith("@gmail.com")){
      setEmailError("Email must end with @gmail.com")
      valid = false;
    }
    if(password.length < 6){
      setPassError("Password must have 6 characters.")
      valid = false;
    }
    if(valid){
      setUserEmail(email);
      onLogIn();
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.card}>
    <div className={styles.iconWrapper}>
     <div className={styles.icon}><IoBriefcaseSharp /></div>
     </div>
      <h2 className={styles.title}>JobJourney</h2>
      <p className={styles.subtitle}>
          Welcome back! Please login to continue.
       </p>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        className={emailError ? styles.errorInput : ""}
        placeholder="your@email.com" />
        {emailError && <p className={styles.errorText}>{emailError}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={passError ? styles.errorInput : ""} placeholder="••••••••" />
        {passError && <p className={styles.errorText}>{passError}</p>}
      </div>
    <button className={styles.loginBtn} onClick={handler} >Login</button>
      <p className={styles.signupText}>
        Don't have an account? <span>Sign up</span>
      </p>
    </div> 
    <p className={styles.demoText}>
      Demo: Use any email and password (min 6 chars) to continue
    </p>
    </div>
  );
}
export default LogInPg;
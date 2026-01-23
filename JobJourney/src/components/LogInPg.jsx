import styles from"./LogInpg.module.css"
import { IoBriefcaseSharp } from "react-icons/io5";
let LogInPg = () => {
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
        <input type="email" placeholder="your@email.com" />
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
      </div>
    <button className={styles.loginBtn}>Login</button>
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
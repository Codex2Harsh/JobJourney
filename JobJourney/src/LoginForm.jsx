import styles from "./loginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2>Add Job Application</h2>
          <button className={styles.closeButton}>×</button>
        </div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Company Name </label>
            <input type="text" placeholder="e.g., Google, Microsoft"/>
          </div>
          <div className={styles.inputGroup}>
            <label>Job Role </label>
            <input
              type="text"
              placeholder="e.g., Software Engineer, Product Manager"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Job Location </label>
            <input
              type="text"
              placeholder="e.g., New York, Remote, San Francisco"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Job Type </label>
            <select>
              <option>Select job type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Status </label>
            <select>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className={styles.buttonRow}>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

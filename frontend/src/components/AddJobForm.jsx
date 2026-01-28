import styles from "./AddJobForm.module.css";
import { useState, useEffect } from 'react'

export default function AddJobForm({onClosebtn, addJob,updateJob, editingJob}) {
  //defn useState to structure the values from input
  const [formData, setFormData] = useState({
  company: "",
  position: "",
  location: "",
  type: "",
  status: "Applied"
  });
//fetching the value in order from inputs
const handleChange = (e)=>{
  const{name,value} = e.target;
  setFormData(prev=>({...prev,[name]:value}));
}
//passing the value to parent
// const addInput=(e)=>{
//   //avoidign refresh
//   e.preventDefault();
//   // getItem(formData);
//   addJob(formData);
//   //resetting form
//   setFormData({
//     company: "",
//     position: "",
//     location: "",
//     type: "",
//     status: "Applied"
//   });

//   if (editingJob) {
//     onClosebtn();
//   }
// }
const addInput = (e) => {
  e.preventDefault();

  if (editingJob) {
    updateJob(editingJob._id, formData);   
  } else {
    addJob(formData);                      
  }

  setFormData({
    company: "",
    position: "",
    location: "",
    type: "",
    status: "Applied"
  });

  onClosebtn();
};

//to update job
useEffect(() => {
  if (editingJob) {
    setFormData({
      company: editingJob.company || "",
      position: editingJob.position || "",
      location: editingJob.location || "",
      type: editingJob.type || "",
      status: editingJob.status || "Applied"
    });
  }
}, [editingJob]);




  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2>{editingJob ? "Edit Job" : "Add Job Application"}</h2>
          <button className={styles.closeButton} onClick={onClosebtn} >×</button>
        </div>
        <form className={styles.form} onSubmit={addInput}>
          <div className={styles.inputGroup}>
            <label>Company Name </label>
            <input type="text"  placeholder="e.g., Google, Microsoft" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Job Role </label>
            <input
              type="text"
              placeholder="e.g., Software Engineer, Product Manager"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Job Location </label>
            <input
              type="text"
              placeholder="e.g., New York, Remote, San Francisco"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Job Type </label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option>Select job type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Status </label>
            <select name= "status" value={formData.status} onChange={handleChange}>
              <option value="Applied">Applied</option>
              <option value="Incoming Rounds">Incoming Rounds</option>
              <option value="Interview">Interview</option>
              <option value="Job Offer">Job Offer</option>
            </select>
          </div>

          <div className={styles.buttonRow}>
            <button type="button" className={styles.cancelButton} onClick={onClosebtn} >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton} >
              {editingJob ? "Update Job" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

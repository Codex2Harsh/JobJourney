import { useState } from "react";
import styles from "./LogInpg.module.css";
import axios from "axios";
import { IoBriefcaseSharp } from "react-icons/io5";

export default function Signup({ onGoLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleSignup = async () => {
    let valid = true;
    setEmailError("");
    setPassError("");

    if (!email.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
      valid = false;
    }
    if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      valid = false;
    }
    if (!valid) return;

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password
      });
      alert("Registered successfully! Please login.");
      onGoLogin();
    } catch (err) {
      console.log(err);
      alert("User already exists or server error");
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}><IoBriefcaseSharp /></div>
        </div>

        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Register to track your job journey</p>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? styles.errorInput : ""}
            placeholder="your@email.com"
          />
          {emailError && <p className={styles.errorText}>{emailError}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passError ? styles.errorInput : ""}
            placeholder="••••••••"
          />
          {passError && <p className={styles.errorText}>{passError}</p>}
        </div>

        <button className={styles.loginBtn} onClick={handleSignup}>
          Sign Up
        </button>

        <p className={styles.signupText}>
          Already have an account?{" "}
          <span onClick={onGoLogin}>Login</span>
        </p>
      </div>
    </div>
  );
}

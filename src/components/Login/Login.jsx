import React, { useState, useEffect } from "react";
import styles from "../../styles/Login.module.css";

const Login = ({ mount }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="base">
        <div className={styles.screen}>
          <div className={styles.start}>
            <span className={styles.time}>
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className={styles.welcome}>Welcome to my portfolio</span>
            <button onClick={mount} className={styles.cto}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

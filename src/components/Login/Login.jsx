import React, { useState, useEffect, useMemo } from "react";
import styles from "../../styles/Login.module.css";

const Login = ({ mount }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const setCurrentTimeMemo = useMemo(() => {
    return () => {
      setCurrentTime(new Date());
    };
  }, [setCurrentTime]);

  useEffect(() => {
    const timer = setInterval(setCurrentTimeMemo, 1000);

    return () => clearInterval(timer);
  }, [setCurrentTimeMemo]);

  return (
    <div className="container">
      <div className="base">
        <div className={styles.screen}>
          <div className={styles.start}>
            <span className={styles.time} suppressHydrationWarning>
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

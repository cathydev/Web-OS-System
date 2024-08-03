import styles from "../../styles/computer.module.css";

const Computer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.screen}>
          <div className={styles.code}>
            <div className={styles.var}>
              <span className={styles.parrafo}>
                <code>
                  <span style={{ color: "rgb(218, 218, 46)" }}>let </span>{" "}
                  <span style={{ color: "rgb(113, 160, 204)" }}>intro</span> ={" "}
                </code>
                <code>
                  <span style={{ color: "rgb(212, 163, 90)" }}>
                    &apos;Hello world. Welcome to my portfolio!&apos;
                  </span>
                  ;
                </code>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.keyboard}>
        <div className={styles.key}></div>
      </div>
    </div>
  );
};

export default Computer;

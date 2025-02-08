import Grid from '@mui/material/Grid';
import styles from "@/styles/AboutMe.module.css";
import WindowLayout from "../WindowLayout/WindowLayout";


const AboutMe = ({ close, maximize } : {close: () => void, maximize: () => void}) => {
  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid item xs={12} className={styles.container} sx={{flexDirection: "column", padding: "0 16px"}}>
      </Grid>
    </WindowLayout>
  );
};

export default AboutMe;

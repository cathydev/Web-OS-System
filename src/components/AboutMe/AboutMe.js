import Grid from '@mui/material/Grid';
import styles from "@/styles/AboutMe.module.css";
import WindowLayout from "../WindowLayout/WindowLayout";
import Image from 'next/image';
import portrait from "../../../public/Icons/portrait.svg";

const AboutMe = ({ close, maximize }) => {
  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid item xs={12} className={styles.container} sx={{flexDirection: "column", padding: "0 16px"}}>
        <Image
          src={portrait}
          alt="Catherine pic"
          className={styles.image}
        />
        <span className={styles.text}>
          Hi! I am Catherine, I&apos;m from Caracas, Venezuela. I&apos;m a self- taught frontend web developer
          but right now I&apos;m studying to obtain my associate degree on IT. For three years I have been working as a full-time Frontend developer,
          an experience that has allowed me to learn a lot and grow as a professional. In my everyday job I work on adding new functionalities to my assigned projects,
          following the client&apos;s requirements. I also solve bugs and support my coworkers with code reviews.
          While I consider that I&apos;ve gained a lot of knowledge and experience in my current job I am always looking for new opportunities that will allow me to keep learning new things,
          contribute to new projects using my current skills and grow as a professional
        </span>
      </Grid>
    </WindowLayout>
  );
};

export default AboutMe;

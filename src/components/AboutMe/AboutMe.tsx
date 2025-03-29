import Grid from '@mui/material/Grid';
import styles from "@/styles/AboutMe.module.css";
import WindowLayout from "../WindowLayout/WindowLayout";


const AboutMe = ({ close, maximize }: { close: () => void, maximize: () => void }) => {
  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid item xs={12} className={styles.container} sx={{ flexDirection: "column", padding: "0 16px" }}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About me and this project</h2>
          <p className={styles.text}>
            Hi! My name is Catherine, and I&quot;m a fullstack web developer with a passion for building interactive and engaging digital experiences. I created this project as a creative take on an OS-style system, allowing me to showcase my skills in both frontend and backend development while having fun experimenting with design, functionality, and user interaction.
          </p>
          <p className={styles.text}>
            This project is more than just a technical demonstration—it&quot;s a reflection of my creativity and problem-solving approach. I wanted to craft something unique that blends practicality with a touch of nostalgia, giving users an immersive experience within a browser-based operating system.
          </p>
          <p className={styles.text}>
            I hope you enjoy exploring this project as much as I enjoyed creating it! Feel free to click around, open windows, and interact with different elements. If you have any questions, feedback, or just want to connect, don&quot;t hesitate to reach out. I&quot;d love to hear your thoughts!
          </p>

        </div>
      </Grid>
    </WindowLayout>
  );
};

export default AboutMe;

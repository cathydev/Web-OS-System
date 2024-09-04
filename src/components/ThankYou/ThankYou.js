import Grid from '@mui/material/Grid';
import WindowLayout from "../WindowLayout/WindowLayout";
import styles from "../../styles/ThankYou.module.css";
import Image from 'next/image';

const ContactMe = ({ close }) => {
    return (
        <WindowLayout closeWindow={close}>
            <Grid item xs={12} className={styles.container} sx={{ flexDirection: "column", padding: "0 16px" }}>
                <h1>
                    Thank You!
                </h1>
                <Image
                    src="/Images/animated_heart.gif"
                    alt="Heart animation"
                    width={300} 
                    height={300}
                    unoptimized
                />
            </Grid>
        </WindowLayout>
    );
};

export default ContactMe;

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { IsItMobile } from '@/utils/utils';
import styles from "@/styles/WindowsLayout.module.css"

export default function WindowLayout({ children, closeWindow, maximizeWindow }) {
    const [isMaximized, setIsMaximized] = useState(true);
    const isMobile = IsItMobile();

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const gridSize = isMaximized && !isMobile ? { width: '70vw', left: "19vw", height: '80%', top: "7%" } : { width: '100%', height: 'calc(100% - 35px)', right: "0", bottom: "35px" };

    return (
        <Grid container spacing={2} className={styles.container} sx={{ ...gridSize }}>
            <Grid item xs={12} className={styles.nav}>
                <div className={styles.title}>
                    <span className={styles.window_title}>Portfolio</span>
                </div>
                <div className={styles.controls}>
                    <button className={styles.minimize}>-</button>
                    <button className={styles.maximize} onClick={() => { handleMaximize(); maximizeWindow(); }} disabled={isMobile}>□</button>
                    <button className={styles.close} onClick={closeWindow}>x</button>
                </div>
            </Grid>
            {children}
        </Grid>
    )
}
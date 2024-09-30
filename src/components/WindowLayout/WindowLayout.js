import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { IsItMobile } from '@/utils/utils';
import styles from "@/styles/WindowsLayout.module.css"
import RemoveIcon from '@mui/icons-material/Remove';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';

export default function WindowLayout({ children, closeWindow, maximizeWindow }) {
    const [isMaximized, setIsMaximized] = useState(true);
    const isMobile = IsItMobile();

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const gridSize = isMaximized && !isMobile ? { width: '70vw', left: "19vw", height: '80%', top: "7%" } : { width: 'calc(100vw - 24px)', height: 'calc(100% - 35px)', left: "100%", bottom: "35px", marginLeft: "0" };

    return (
        <Grid container spacing={2} className={styles.container} sx={{ ...gridSize }}>
            <Grid item xs={12} className={styles.nav}>
                <div className={styles.title}>
                    <span className={styles.window_title}>Portfolio</span>
                </div>
                <div className={styles.controls}>
                    <button className={styles.minimize}>
                        <RemoveIcon fontSize='smaller' />
                    </button>
                    <button className={styles.maximize} onClick={() => { handleMaximize(); maximizeWindow(); }} disabled={isMobile}>
                        <CropSquareIcon fontSize='smaller' />
                    </button>
                    <button className={styles.close} onClick={closeWindow}>
                        <CloseIcon fontSize='smaller' />
                    </button>
                </div>
            </Grid>
            {children}
        </Grid>
    )
}
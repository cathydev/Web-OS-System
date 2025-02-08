import { ReactElement, useState } from 'react';
import Grid from '@mui/material/Grid';
import styles from "@/styles/WindowsLayout.module.css"
import RemoveIcon from '@mui/icons-material/Remove';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import { isMobile } from 'react-device-detect';

export default function WindowLayout({ children, closeWindow, maximizeWindow }: { children: ReactElement, closeWindow: () => void, maximizeWindow: () => void }) {
    const [isMaximized, setIsMaximized] = useState(true);

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const gridSize = isMaximized && !isMobile ? { width: '70vw', left: "19vw", height: '80%', top: "7%" } : { width: 'calc(100vw - 24px)', height: 'calc(100% - 35px)', left: "100%", bottom: "35px", marginLeft: "0" };

    return (
        <Grid container spacing={2} className={styles.container} sx={{ ...gridSize }}>
            <Grid item xs={12} className={styles.nav}>
                <div className={styles.title}>
                    <span className={styles.window_title}></span>
                </div>
                <div className={styles.controls}>
                    <button className={styles.minimize}>
                        <RemoveIcon sx={{ fontSize: "smaller" }} />
                    </button>
                    <button className={styles.maximize} onClick={() => { handleMaximize(); maximizeWindow(); }} disabled={isMobile}>
                        <CropSquareIcon sx={{ fontSize: "smaller" }} />
                    </button>
                    <button className={styles.close} onClick={closeWindow}>
                        <CloseIcon sx={{ fontSize: "smaller" }} />
                    </button>
                </div>
            </Grid>
            {children}
        </Grid>
    )
}
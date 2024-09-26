import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { IsItMobile } from '@/utils/utils';
import styles from "@/styles/WindowsLayout.module.css"

export default function WindowLayout({ children, closeWindow }) {
    const [isMaximized, setIsMaximized] = useState(true);
    const isMobile = IsItMobile();

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const gridSize = isMaximized && !isMobile ? { width: '70%', height: '80%', right: "10%", top: "7%" } : { width: '100%', height: 'calc(100% - 35px)', right: "0", bottom: "35px" };

    return (
        <Grid container spacing={2} className={styles.container} sx={{ ...gridSize }}>
            <Grid item xs={12} className={styles.nav}>
                <div className="title">
                    <span className='window-title'>Portfolio</span>
                </div>
                <div className="controls">
                    <button className="minimize"></button>
                    <button className="maximize" onClick={handleMaximize} disabled={isMobile}></button>
                    <button className="close" onClick={closeWindow}></button>
                </div>
            </Grid>
            {children}
        </Grid>
    )
}
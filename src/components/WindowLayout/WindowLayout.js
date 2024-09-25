import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

export default function WindowLayout({ children, closeWindow }) {
    const [isMaximized, setIsMaximized] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        setIsMobile(isMobileDevice);
    }, []);

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const gridSize = isMaximized ? { width: '70%', height: '80%', right: "10%", top: "7%" } : { width: '100%', height: '100%', right: "0", top: "0" };

    return (
        <Grid container spacing={2} sx={{ margin: 0, color: "black", background: "white", position: "absolute", overflowY: "scroll", ...gridSize }}>
            <Grid item xs={12} sx={{ display: 'flex', background: "#e4d2d245", cursor: "grab", padding: "0 16px", height: "50px" }}>
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
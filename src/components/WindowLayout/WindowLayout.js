import Grid from '@mui/material/Grid';

export default function WindowLayout({ children, closeWindow }) {
    return (
        <Grid container spacing={2} sx={{ margin: 0, color: "black", background: "white", width: "100%", height: "100%", position: "absolute", right: "0", top: 0, overflowY: "scroll" }}>
            <Grid item xs={12} sx={{ display: 'flex', background: "#e4d2d245", padding: "0 16px", height: "50px" }}>
                <div className="title">
                    <span className='window-title'>Portfolio</span>
                </div>
                <div className="controls">
                    <button className="minimize"></button>
                    <button className="maximize"></button>
                    <button className="close" onClick={closeWindow}></button>
                </div>
            </Grid>
            {children}
        </Grid>
    )
}
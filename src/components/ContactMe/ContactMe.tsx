import { useState } from 'react';
import { Grid, TextField, Button, Container, Box, Snackbar, Alert, SnackbarCloseReason } from '@mui/material';
import WindowLayout from "../WindowLayout/WindowLayout";
import styles from "../../styles/ContactMe.module.css";

const ContactMe = ({ close, maximize }: { close: () => void, maximize: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), message }),
            });

            if (response.ok) {
                setSuccess(true);
                setMessage('')
                setEmail('')
                setName('')
                setError(false);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
        setOpen(true)
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <WindowLayout closeWindow={close} maximizeWindow={maximize}>
            <Box className={styles.container}>
                <Grid item xs={12} md={6} sx={{ padding: "16px", flex: "none" }}>
                    <h1>Contact Me! Let&apos;s chat about your project or just connect!</h1>
                    <span> You can reach me at <a href="mailto:catherinemejiasdsilva@gmail.com">catherinemejiasdsilva@gmail.com</a> 💫</span>
                </Grid>
                <Grid item xs={12} md={6} sx={{ padding: "16px", flex: "none" }}>
                    <Container maxWidth="sm">
                        <h2>Send me a message:)</h2>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                margin="normal"
                                fullWidth
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Submit
                            </Button>
                            {success && <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                <Alert
                                    onClose={handleClose}
                                    severity="success"
                                    variant="filled"
                                    sx={{ width: '100%' }}
                                >
                                    Thanks for contacting me!
                                </Alert></Snackbar>}
                            {error && <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                <Alert
                                    onClose={handleClose}
                                    severity="error"
                                    variant="filled"
                                    sx={{ width: '100%' }}
                                >
                                    There was an error sending the message
                                </Alert></Snackbar>}
                        </form>
                    </Container>
                </Grid>
            </Box>
        </WindowLayout>
    );
};

export default ContactMe;

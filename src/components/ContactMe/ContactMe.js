import { useState } from 'react';
import { Grid, TextField, Button, Container, Box } from '@mui/material';
import WindowLayout from "../WindowLayout/WindowLayout";
import styles from "../../styles/ContactMe.module.css";

const ContactMe = ({ close }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit
        = (event) => {
            event.preventDefault();
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
        };

    return (
        <WindowLayout closeWindow={close}>
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
                                disabled
                                fullWidth
                            >
                                Submit
                            </Button>
                        </form>
                    </Container>
                </Grid>
            </Box>
        </WindowLayout>
    );
};

export default ContactMe;

import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, CircularProgress } from '@mui/material';

interface ProjectData {
  title: string;
  image: string;
  description: string;
  url: string;
  tags: string[];
}

const Projects = ({ close, maximize }: {close: () => void, maximize: () => void}) => {
  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid container spacing={3} sx={{ padding: "20px", background: "#f0f8ff", height: "100%" }}>
        {
            <CircularProgress sx={{ margin: "auto" }} />
        }
      </Grid>
    </WindowLayout>
  );
};

export default Projects;
import { useState, useEffect } from "react";
import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Chip, CircularProgress, CardHeader, Box } from '@mui/material';
import Link from "next/link";
interface ProjectData {
  title: string;
  image: string;
  description: string;
  url: string;
  tags: string[];
}

const Projects = ({ close, maximize }: {close: () => void, maximize: () => void}) => {
  const [isHoveredId, setIsHoveredId] = useState('');
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch('/api/projects', {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjectsData(data.projects.rows);
      })
  }, []);

  const hasProjects = projectsData.length > 0;

  function handleMouseOver(ID: string) {
    return () => {
      setIsHoveredId(ID);
    }
  }

  function handleMouseOut() {
    setIsHoveredId('');
  }

  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid container spacing={3} sx={{ padding: "20px", background: "#f0f8ff", height: hasProjects ? "auto" : "100%" }}>
        {
          hasProjects ?
            projectsData.map((item, index) => (
              <Grid item xs={12} sm={6} key={index} sx={{ padding: { xs: "0 16px", lg: 0 }, margin: { xs: "0 16px", sm: 0 } }}>
                <Link href={item.url} target="_blank" style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: { xs: "-webkit-fill-available", sm: "220" }, height: "280px" }}>
                    <CardActionArea
                      onMouseOver={handleMouseOver(item.title)}
                      onMouseOut={handleMouseOut}
                    >
                      {isHoveredId == item.title ?
                        <CardContent>
                          <CardMedia
                            component="img"
                            height="160"
                            image={item.image}
                            alt={item.title}
                          />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                          </Typography>
                          <div>
                            {item.tags.map((tag, tagIndex) => (
                              <Chip key={tagIndex} label={tag} sx={{ margin: "3px 3px 0 0" }} />
                            ))}
                          </div>
                        </CardContent>
                        :
                        <>
                          <CardHeader
                            title={item.title}
                          />
                          <CardMedia
                            component="img"
                            height="220"
                            image={item.image}
                            alt={item.title}
                          />
                        </>
                      }
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))
            :
            <CircularProgress sx={{ margin: "auto" }} />
        }
      </Grid>
    </WindowLayout>
  );
};

export default Projects;
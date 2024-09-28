import { useState, useEffect, use } from "react";
import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Chip } from '@mui/material';

const Projects = ({ close }) => {
  const [isHoveredId, setIsHoveredId] = useState('');
  const [projectsData, setProjectsData] = useState();

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

  function handleMouseOver(ID) {
    return () => {
      setIsHoveredId(ID);
    }
  }

  function handleMouseOut() {
    setIsHoveredId('');
  }

  return (
    <WindowLayout closeWindow={close}>
      <Grid container spacing={2} sx={{ padding: "20px", background: "#f0f8ff" }}>
        {
          projectsData && projectsData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ padding: { xs: "0 16px", lg: 0 }, margin: { xs: "0 16px", sm: 0 } }}>
              <Card sx={{ maxWidth: { xs: "-webkit-fill-available", sm: "220", md: 390 } }}>
                <CardActionArea
                  onMouseOver={handleMouseOver(item.title)}
                  onMouseOut={handleMouseOut}
                >
                  {isHoveredId == item.title ?
                    <CardContent sx={{ height: "220px" }}>
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
                      <CardMedia
                        component="img"
                        height="220"
                        image={item.image}
                        alt="Project image"
                        sx={{ objectFit: "contain" }}
                      />
                      <CardContent>
                        <Typography variant="h6" sx={{ color: 'text.secondary', padding: "0 10px" }}>
                          {item.title}
                        </Typography>
                      </CardContent>
                    </>
                  }
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </WindowLayout>
  );
};

export default Projects;
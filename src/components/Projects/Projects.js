import { useState } from "react";
import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Chip } from '@mui/material';

const projectsElement = [
  {
    "title": "McLovin ID",
    "description": "An illustration made with CSS",
    "image": "Images/project1.png",
    "url": "https://mclovin-id-generator.vercel.app/",
    "tags": ["etiqueta1", "etiqueta2", "etiqueta3"]
  },
  {
    "title": "Link Shortener",
    "description": "Shorten your URLs",
    "image": "Images/project2.png",
    "url": "https://react-link-shortener.vercel.app/",
    "category": "Categoría del elemento 2",
    "tags": ["fullstack", "react", "node"]
  },
  {
    "title": "Landing Page",
    "description": "Landing Page for Nintendo Switch",
    "image": "Images/project3.png",
    "url": "https://cathydev.github.io/Landing-Page-Nintendo-Switch/",
    "category": "Categoría del elemento 3",
    "tags": ["etiqueta7", "etiqueta8", "etiqueta9"]
  },
  {
    "title": "Título del elemento 4",
    "description": "Descripción del elemento 4",
    "image": "Images/web.webp",
    "url": "https://www.ejemplo.com/elemento4",
    "category": "Categoría del elemento 4",
    "tags": ["etiqueta10", "etiqueta11", "etiqueta12"]
  },
]

const Projects = ({ close }) => {
  const [isHoveredId, setIsHoveredId] = useState('');
  console.log(isHoveredId)
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
          projectsElement.map((item, index) => (
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
                      <Typography variant="h6" sx={{ color: 'text.secondary', padding: "0 10px"}}>
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
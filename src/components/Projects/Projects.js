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
    "tags": ["etiqueta4", "etiqueta5", "etiqueta6"]
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
  {
    "title": "Título del elemento 5",
    "description": "Descripción del elemento 5",
    "image": "Images/web.webp",
    "url": "https://www.ejemplo.com/elemento5",
    "category": "Categoría del elemento 5",
    "tags": ["etiqueta13", "etiqueta14", "etiqueta15"]
  },
  {
    "title": "Título del elemento 6",
    "description": "Descripción del elemento 6",
    "image": "Images/web.webp",
    "url": "https://www.ejemplo.com/elemento6",
    "category": "Categoría del elemento 6",
    "tags": ["etiqueta16", "etiqueta17", "etiqueta18"]
  }
]

const Projects = ({ close }) => {
  return (
    <WindowLayout closeWindow={close}>
      <Grid container spacing={2} sx={{ padding: "20px", background: "#f0f8ff" }}>
        {
          projectsElement.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ padding: { xs: "0 16px", lg: 0 }, margin: { xs: "0 16px", sm: 0 } }}>
              <Card sx={{ maxWidth: { xs: "-webkit-fill-available", sm: "220", md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="120"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <div>
                      {item.tags.map((tag, tagIndex) => (
                        <Chip key={tagIndex} label={tag} sx={{margin: "3px 3px 0 0"}} />
                      ))}
                    </div>
                  </CardContent>
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
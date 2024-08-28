import WindowLayout from "../WindowLayout/WindowLayout";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const projectsElement = [
  {
    "title": "McLovin ID Illustration",
    "description": "An illustration made with CSS",
    "image": "/project1.png",
    "url": "https://mclovin-id-generator.vercel.app/",
    "tags": ["etiqueta1", "etiqueta2", "etiqueta3"]
  },
  {
    "title": "Link Shortener",
    "description": "Shorten your URLs",
    "image": "/project2.png",
    "url": "https://react-link-shortener.vercel.app/",
    "category": "Categoría del elemento 2",
    "tags": ["etiqueta4", "etiqueta5", "etiqueta6"]
  },
  {
    "title": "Landing Page",
    "description": "Landing Page for Nintendo Switch",
    "image": "/project3.png",
    "url": "https://cathydev.github.io/Landing-Page-Nintendo-Switch/",
    "category": "Categoría del elemento 3",
    "tags": ["etiqueta7", "etiqueta8", "etiqueta9"]
  },
  {
    "title": "Título del elemento 4",
    "description": "Descripción del elemento 4",
    "image": "/web.webp",
    "url": "https://www.ejemplo.com/elemento4",
    "category": "Categoría del elemento 4",
    "tags": ["etiqueta10", "etiqueta11", "etiqueta12"]
  },
  {
    "title": "Título del elemento 5",
    "description": "Descripción del elemento 5",
    "image": "/web.webp",
    "url": "https://www.ejemplo.com/elemento5",
    "category": "Categoría del elemento 5",
    "tags": ["etiqueta13", "etiqueta14", "etiqueta15"]
  },
  {
    "title": "Título del elemento 6",
    "description": "Descripción del elemento 6",
    "image": "/web.webp",
    "url": "https://www.ejemplo.com/elemento6",
    "category": "Categoría del elemento 6",
    "tags": ["etiqueta16", "etiqueta17", "etiqueta18"]
  }
]


const Projects = ({close}) => {
  return (
    <WindowLayout closeWindow={close}>
        {
          projectsElement.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
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
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
    </WindowLayout>
  );
};

export default Projects;
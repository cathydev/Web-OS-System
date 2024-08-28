import WindowLayout from "../WindowLayout/WindowLayout";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const projectsElement = [
  {
    "title": "Título del elemento 1",
    "description": "Descripción del elemento 1",
    "image": "ruta/a/la/imagen/1.jpg",
    "url": "https://www.ejemplo.com/elemento1",
    "category": "Categoría del elemento 1",
    "tags": ["etiqueta1", "etiqueta2", "etiqueta3"]
  },
  {
    "title": "Título del elemento 2",
    "description": "Descripción del elemento 2",
    "image": "ruta/a/la/imagen/2.jpg",
    "url": "https://www.ejemplo.com/elemento2",
    "category": "Categoría del elemento 2",
    "tags": ["etiqueta4", "etiqueta5", "etiqueta6"]
  },
  {
    "title": "Título del elemento 3",
    "description": "Descripción del elemento 3",
    "image": "ruta/a/la/imagen/3.jpg",
    "url": "https://www.ejemplo.com/elemento3",
    "category": "Categoría del elemento 3",
    "tags": ["etiqueta7", "etiqueta8", "etiqueta9"]
  },
  {
    "title": "Título del elemento 4",
    "description": "Descripción del elemento 4",
    "image": "ruta/a/la/imagen/4.jpg",
    "url": "https://www.ejemplo.com/elemento4",
    "category": "Categoría del elemento 4",
    "tags": ["etiqueta10", "etiqueta11", "etiqueta12"]
  },
  {
    "title": "Título del elemento 5",
    "description": "Descripción del elemento 5",
    "image": "ruta/a/la/imagen/5.jpg",
    "url": "https://www.ejemplo.com/elemento5",
    "category": "Categoría del elemento 5",
    "tags": ["etiqueta13", "etiqueta14", "etiqueta15"]
  },
  {
    "title": "Título del elemento 6",
    "description": "Descripción del elemento 6",
    "image": "ruta/a/la/imagen/6.jpg",
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
                    image="/web.webp"
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
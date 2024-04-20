import {
  Breadcrumbs,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Button } from '../../components/button/button';
import './styles/gallery.css';
import { serviceGallery } from '../../utilities/serviceGallery';

export const Gallery = () => {
  return (
    <Container sx={{ bgcolor: 'background.wrap', width: '100%' }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ pt: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Typography color="inherit">Галерея</Typography>
      </Breadcrumbs>
      <Typography variant="h1" color="inherit" sx={{ mb: 2 }}>
        Галерея
      </Typography>
      <Grid container spacing={2}>
        {serviceGallery.map((elem) => (
          <Grid key={elem.id} item xs={12} md={3}>
            <div className="card">
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'background.card',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={elem.url}
                    alt="foto"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="#FFFFFF"
                      component="div"
                    >
                      {elem.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button />
                </CardActions>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

import { ThemeProvider } from '@emotion/react';
import {
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from '@mui/material';

export const Gallery = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 2 }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Typography color="inherit">Галерея</Typography>
        </Breadcrumbs>
        <Typography variant="h2" color="inherit" sx={{ mb: 2 }}>
          Галерея
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="" alt="foto" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Фото работ по золочению
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" underline="hover" color="inherit" href="/">
                  Подробнее
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

import { Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material';
import { serviceGallery } from '../../utilities/serviceGallery';
import { ButtonWithBorder } from '../../App.styles';
import * as S from './Gallery.styles';

export const Gallery = () => {
  return (
    <Container sx={{ bgcolor: '#899d9d', width: '100%' }}>
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
            <S.Card key={elem.id}>
              <S.CardImg>
                <img src={elem.url} alt="picture" />
              </S.CardImg>
                <S.CardTitle>{elem.name}</S.CardTitle>
              <ButtonWithBorder>Подробнее</ButtonWithBorder>
            </S.Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

{
  /* <S.CardElement>
<Card
  sx={{
    height: '100%',
    bgcolor: 'background.card',
  }}
> */
}
{
  /* <CardActionArea> */
}
// <CardMedia
//   component="img"
//   height="140"
//   image={elem.url}
//   alt="foto"
// />
// <CardContent>
//   <Typography
//     gutterBottom
//     variant="h5"
//     color="#FFFFFF"
//     component="div"
//   >
//     {elem.name}
//   </Typography>
// </CardContent>
{
  /* </CardActionArea> */
}
//   <CardActions>
//     <ButtonWithBorder />
//   </CardActions>
// </Card>
// </S.CardElement>

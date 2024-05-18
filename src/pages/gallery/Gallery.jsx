import { Breadcrumbs, Link, Typography } from '@mui/material';
import { serviceGallery } from '../../utilities/serviceGallery';
import { WrapBlue } from '../../App.styles';
import * as S from './Gallery.styles';

export const Gallery = () => {
  return (
    <WrapBlue>
      <S.ContainerGallery>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ pt: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Typography color="inherit">Галерея</Typography>
        </Breadcrumbs>
        <h1>Галерея</h1>
        <S.CardContainer>
          {serviceGallery.map((elem) => (
            <S.Card key={elem.id}>
              <S.CardImg>
                <img src={elem.url} alt="picture" />
              </S.CardImg>
              <S.CardContent>
                <S.CardTitle>{elem.name}</S.CardTitle>
                <S.Button>Подробнее</S.Button>
              </S.CardContent>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.ContainerGallery>
    </WrapBlue>
  );
};

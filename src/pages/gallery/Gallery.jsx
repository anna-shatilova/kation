import { Breadcrumbs, Link, Typography } from '@mui/material';
import { serviceGallery } from '../../utilities/serviceGallery';
import { TitleH1, WrapBlue } from '../../App.styles';
import * as S from './Gallery.styles';
import { useNavigate } from 'react-router-dom';

export const Gallery = () => {
  const navigate = useNavigate();

  return (
    <WrapBlue>
      <S.ContainerGallery>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ pt: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Typography color="inherit">Галерея</Typography>
        </Breadcrumbs>
        <TitleH1>Галерея</TitleH1>
        <S.CardContainer>
          {serviceGallery.map((elem) => (
            <S.Card
              key={elem.id}
              onClick={() => navigate(`/service-foto/${elem.id}`)}
            >
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

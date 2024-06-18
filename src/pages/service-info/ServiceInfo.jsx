import {
  Breadcrumbs,
  // ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@mui/material';
import * as S from './ServiceInfo.styles';
import { Container, TitleH1 } from '../../App.styles';

// import { useParams } from 'react-router-dom';

const itemData = [
  {
    img: '/img/gallery/slide6.jpg',
    title: 'foto1',
  },
  {
    img: '/img/gallery/slide3.jpg',
    title: 'foto2',
  },
  {
    img: '/img/gallery/slide8.jpg',
    title: 'foto3',
  },
  {
    img: '/img/gallery/slide11.jpg',
    title: 'foto4',
  },
  {
    img: '/img/gallery/slide12.jpg',
    title: 'foto5',
  },
  {
    img: '/img/gallery/slide20.jpg',
    title: 'foto6',
  },
  {
    img: '/img/gallery/slide23.jpg',
    title: 'foto8',
  },
];

export const ServiceInfo = () => {
  // const params = useParams

  return (
    <Container>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        color="#ffffff"
        sx={{ mt: 2 }}
      >
        <Link underline="hover" color="#ffffff" href="/">
          Главная
        </Link>
        <Link underline="hover" color="#ffffff" href="/gallery">
          Услуги
        </Link>
        <Typography color="#ffffff">Золочение</Typography>
      </Breadcrumbs>
      <TitleH1>Золочение (99,99)</TitleH1>
      <S.ServiceDesc>Технология позволяет получать желтые матовые и блестящие покрытия без примесей. Высокая кроющая способность позволяет покрывать детали самых сложных форм с узкими глухими отверстиями, а так же некоторые волноводы без использования внутренних анодов.</S.ServiceDesc>
      <S.FotoContainer>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </S.FotoContainer>
    </Container>
  );
};

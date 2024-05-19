import { Link } from 'react-router-dom';
import * as S from './Footer.styles';
import { ButtonBlue, Container } from '../../App.styles';

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterContent>
          <Link to="/">
            <S.FooterLogo src="/img/logo.svg" alt="logo" />
          </Link>
          <S.FooterMenu>
            <S.FooterList>
              <Link to="/">
                <S.FooterListItem>Главная</S.FooterListItem>
              </Link>
              <Link to="#">
                <S.FooterListItem>Услуги</S.FooterListItem>
              </Link>
              <Link to="/gallery">
                <S.FooterListItem>Галерея</S.FooterListItem>
              </Link>
              <Link to="/contacts">
                <S.FooterListItem>Контакты</S.FooterListItem>
              </Link>
            </S.FooterList>
          </S.FooterMenu>
          <ButtonBlue>Заказать консультацию</ButtonBlue>
        </S.FooterContent>
        <S.FooterText>© ООО Катион, 2024</S.FooterText>
      </Container>
    </S.Footer>
  );
};

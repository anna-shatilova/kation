import { Link } from 'react-router-dom';
import * as S from './Footer.styles';
import { ButtonBlue, Container } from '../../App.styles';
import { useState } from 'react';
import { ModalOrder } from '../modal-order/ModalOrder';

export const Footer = () => {
  const [isOpenModalOrder, setIsOpenModalOrder] = useState(false);

  const handlerModalOrder = () => {
    setIsOpenModalOrder(true);
  };

  //функция закрывает модальное окно
  function closeModalWindow() {
    setIsOpenModalOrder((isOpenModalOrder) => !isOpenModalOrder);
  }

  return (
    <>
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
            <ButtonBlue onClick={handlerModalOrder}>
              Заказать консультацию
            </ButtonBlue>
          </S.FooterContent>
          <S.FooterText>© ООО Катион, 2024</S.FooterText>
        </Container>
      </S.Footer>

      {isOpenModalOrder && <ModalOrder setOpenModalWindow={closeModalWindow} />}
    </>
  );
};

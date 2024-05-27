import { Container } from '../../App.styles';
import * as S from './Contacts.styles';

export const Contacts = () => {
  return (
    <Container>
      <S.ContactsTitle>Контакты ООО &quot;Катион&quot;</S.ContactsTitle>
      <S.ContactItems>
        <S.ContactItem>
          <img src="/img/phone.svg" alt="" />
          <h3>Позвонить нам:</h3>
          <a href="tel:+79032742878">+7 903 274 2878</a>
          <a href="tel:+79250750554">+7 925 075 0554</a>
        </S.ContactItem>
        <S.ContactItem>
          <img src="/img/mail.svg" alt="" />
          <h3>Написать нам:</h3>
          <a href="mailto:oookation@gmail.com">oookation@gmail.com</a>
        </S.ContactItem>
        <S.ContactItem>
          <img src="/img/map.svg" alt="" />
          <h3>Наш адрес:</h3>
          <p>
            г. Москва, ул. Шоссе Энтузиастов, &nbsp;д. 31, м. Шоссе Энтузиастов
          </p>
        </S.ContactItem>
      </S.ContactItems>
      <S.ContactsHeading>Время работы:&nbsp; 10:00 - 20:00</S.ContactsHeading>
      <S.ContactsText>Часы посещения: 11:00 - 18:00</S.ContactsText>
      <S.ContactsTextSpec>С собой необходимо взять паспорт</S.ContactsTextSpec>
      <S.ContactsHeading>Как нас найти</S.ContactsHeading>
      <S.ContactsMapContainer>
        <S.ContactsTextSpan>Пешком:</S.ContactsTextSpan>
        <img src="/img/from_metro.jpg" alt="от метро" />
        <S.ContactsTextSpan>На машине:</S.ContactsTextSpan>
        <img src="/img/by_auto.jpg" alt="на машине" />
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d380d2517cebce728ccdfa7e9b1d942467bf52cca676b251e426a775c54ed56&amp;source=constructor"
          width="100%"
          height="400"
        ></iframe>
      </S.ContactsMapContainer>
    </Container>
  );
};

import * as S from './styles/Contacts.styles';

export const Contacts = () => {
  return (
    <S.Contacts>
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
          <p>г.Москва, ул.Шоссе Энтузиастов, д.31, м.Шоссе Энтузиастов</p>
        </S.ContactItem>
      </S.ContactItems>
      <S.ContactsHeading>Время работы:&nbsp; 10:00 - 20:00</S.ContactsHeading>
      <S.ContactsText>Часы посещения: 11:00 - 18:00</S.ContactsText>
      <S.ContactsText>С собой необходимо взять паспорт</S.ContactsText>
      <S.ContactsHeading>Как нас найти</S.ContactsHeading>
      <S.ContactsMapContainer>
        <img src="/img/Kation-checkpoint.jpg" alt="проходная" />
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af84eb81f4280687663e80788c8a2865662303154b3e12e5aa86d1c649d124622&amp;source=constructor"
          width="100%"
          height="400"
        ></iframe>
      </S.ContactsMapContainer>
    </S.Contacts>
  );
};

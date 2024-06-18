import { useEffect, useState } from 'react';
import * as S from './ModalOrder.styles';

export const ModalOrder = ({ setOpenModalWindow }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [inputError, setInputError] = useState(null);
  const [modeSuccess, setModeSuccess] = useState(null);

  // Препятствует перезагрузке страницы при нажатиии кнопок, когда они находятся внутри формы
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeOpen = () => {
    setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow);
  };

  const handleClick = async () => {
    try {
      if (!name) {
        setInputError('Введите Ваше имя');
        return;
      }
      if (!tel) {
        setInputError('Введите номер телефона');
        return;
      }
      const pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

      if (!pattern.test(tel.toLowerCase())) {
        setInputError('Введите корректный номер телефона');
        return;
      }

      if (!inputError) {
        setModeSuccess((modeSuccess) => !modeSuccess);
      }
    } catch (error) {
      setInputError(error.message);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setInputError(null);
  }, [name, tel]);

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalLogo>
              <img src="/img/logo.svg" alt="logo" />
            </S.ModalLogo>
            <S.ModalButtonClose onClick={handleChangeOpen}>
              <S.ModalButtonCloseLine></S.ModalButtonCloseLine>
            </S.ModalButtonClose>
            {!modeSuccess ? (
              <S.ModalForm onSubmit={onSubmit}>
                <S.ModalHeading>Укажите имя и номер телефона.</S.ModalHeading>
                <S.Inputs>
                  <S.ModalInput
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <S.ModalInput
                    type="tel"
                    name="tel"
                    placeholder="Телефон"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </S.Inputs>
                {inputError && <S.Error>{inputError}</S.Error>}
                <S.Buttons>
                  <S.ModalButton type="submit" onClick={handleClick}>
                    Заказать звонок
                  </S.ModalButton>
                </S.Buttons>
              </S.ModalForm>
            ) : (
              <S.ModalHeading>
                Наш менеджер свяжется с Вами в ближайшее время.
              </S.ModalHeading>
            )}
          </S.ModalContent>
        </S.ModalBlock>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

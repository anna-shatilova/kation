import styled from 'styled-components';
import { ButtonBlue } from '../../App.styles';

export const ModalWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (400px / 2));
  top: 60px;
  opacity: 1;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px 42px;
`;

export const ModalHeading = styled.p`
  color: #2c3531;
  margin-bottom: 40px;

`;

export const ModalLogo = styled.div`
margin-bottom: 40px;
  & img {
    width: 140px;
    height: auto;
  }
`;

export const ModalButtonClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  // top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;

export const ModalButtonCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::after,
    &::before {
      background-color: #0080c1;
    }
  }
`;

export const ModalForm = styled.form``;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`;

export const ModalButton = styled(ButtonBlue)`
  width: 278px;
  height: 52px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
`;

export const ModalButtonRegister = styled.button`
  width: 278px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  color: #000;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;

  &:hover {
    background-color: #f4f5f6;
  }
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;

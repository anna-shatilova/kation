import styled from 'styled-components';
import { ButtonWithBorder, Container } from '../../App.styles';

export const ContainerGallery = styled(Container)`
  max-width: 1600px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 255px);
  gap: 15px;
  justify-content: center;
  padding-top: 20px;
`;

export const Card = styled.div`
  border-radius: 0.5rem;
  background-color: #2c3531;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.div`
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 20px;
  height: 100px;
  color: #ffffff;
`;

export const Button = styled(ButtonWithBorder)`
  margin-bottom: 20px;
`;

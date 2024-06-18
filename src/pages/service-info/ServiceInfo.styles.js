import styled from 'styled-components';

export const ServiceDesc = styled.p`
  font-size: 16px;
  line-height: 170%;
`;

export const FotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 255px);
  gap: 15px;
  justify-content: center;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 255px);
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 255px);
  }

  @media screen and (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(1, 255px);
  }
`;

import styled from 'styled-components';
import { TitleH1 } from '../../App.styles';

export const AboutTitle = styled(TitleH1)``;

export const AboutTextDiv = styled.div`
  max-width: 1200px;
  margin-bottom: 40px;

  & p {
    margin-bottom: 10px;
    font-weight: 600;

    &:last-of-type {
      margin-top: 20px;
    }
  }
`;

export const AboutList = styled.ul`
  padding-left: 30px;

  & li {
    list-style: circle;
    font-weight: 600;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;

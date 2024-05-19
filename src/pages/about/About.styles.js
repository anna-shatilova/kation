import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  color: #fff;
`;

export const AboutTitle = styled.h1`
  margin-bottom: 40px;
`;

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

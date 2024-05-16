import styled from 'styled-components';

export const Contacts = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  color: #fff;

  & h2 {
    margin-top: 50px;
  }
`;

export const ContactsTitle = styled.h1`
  margin-bottom: 40px;
`;

export const ContactItems = styled.div`
  display: flex;
  gap: 130px;
  align-items: baseline;
`;

export const ContactItem = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;

  & img {
    width: 64px;
  }

  & h3 {
    margin: 16px 0 10px;
  }

  & a {
    color: #ffffff;

    &:hover {
      color: #afeeee;
    }

    &:active {
      color: #437c7e;
    }
  }
`;

export const ContactsHeading = styled.h2`
  margin-bottom: 15px;
`;

export const ContactsText = styled.p`
  font-weight: 600;
  margin-bottom: 10px;

  &:last-of-type {
    color: #ffcb9a;
  }
`;

export const ContactsMapContainer = styled.div`
  max-width: 1200px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  & img {
    width: 100%;
  }
`;

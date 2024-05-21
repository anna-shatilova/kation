import styled from 'styled-components';
import { TitleH1 } from '../../App.styles';

export const ContactsTitle = styled(TitleH1)``;

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
  margin: 25px 0 10px;
`;

export const ContactsText = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ContactsTextSpec = styled(ContactsText)`
  color: #ffcb9a;
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

export const ContactsTextSpan = styled.span`
  font-weight: 600;
  font-size: 22px;
  margin: 10px 0 20px;
`;

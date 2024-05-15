import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 40px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2c3531;
  padding-top: 32px;
  border-top: 1px solid #fff;
`;

export const FooterLogo = styled.img`
  cursor: pointer;
`;

export const FooterMenu = styled.nav``;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 70px;
`;

export const FooterListItem = styled.li`
  color: #ffffff;
  font-size: 18px;
  line-height: 150%;
  padding: 5px 0;
  &:hover {
    color: #afeeee;
  }

  &:active {
    color: #437c7e;
  }
`;

export const FooterText = styled.p`
padding-bottom: 10px;
    text-align: center;
    padding-top: 30px;
}`;

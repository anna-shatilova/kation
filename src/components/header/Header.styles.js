import styled from 'styled-components';

const colorOfMainHeader = '#ffffff';
const primaryWindowColor = '#afeeee';
export const onActiveColor = '#437c7e';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;

  & svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const HeaderLogo = styled.img`
  cursor: pointer;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 44px;
  position: relative;

  & a {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${colorOfMainHeader};

    &:hover {
      color: ${primaryWindowColor};
    }

    &:active {
      color: ${onActiveColor};
    }

    &:nth-child(2) {
      display: flex;
    }
  }
`;

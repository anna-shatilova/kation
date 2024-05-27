import styled from 'styled-components';
import { onActiveColor } from '../header/Header.styles';

export const PopupMenu = styled.div`
  display: block;
  min-width: 200px;
  max-height: 450px;
  background-color: #d1e8e2;
  position: absolute;
  top: 27px;
  left: 110px;
  overflow-y: scroll;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${onActiveColor};
  }
`;

export const PopupMenuList = styled.ul`
  padding: 10px 20px;

  & li {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding: 5px 0;

    & a {
      color: #000;
    }

    & a:hover,
    a:active {
      color: ${onActiveColor};
      text-decoration: underline;
    }
  }
`;

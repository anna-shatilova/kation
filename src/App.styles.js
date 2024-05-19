import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.ttf');
    font-style: normal;
}
  
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
//   width: 100%;
//   height: 100%;
  /* padding-right: 0;
  overflow-x: hidden; */
}

input,
button,
a {
    font-family: 'Lato', sans-serif;
}

input,
button {
  border: none;
  outline: none;
}

ul li {
  list-style: none;
}
`;

export const WrapGreen = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #2c3531;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4px 30px 30px;
`;

export const WrapBlue = styled.div`
  width: 100%;
  background-color: #899d9d;
`;

// Переиспользуемые компоненты

export const ButtonBlue = styled.button`
  color: #2c3531;
  border: 2px #afeeee solid;
  background-color: #afeeee;
  font-size: 16px;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;

  transition: all 0.3s ease-out;
  padding: 10px 15px;
  border-radius: 2px;
  font-weight: bold;

  &:hover {
    background-color: #437c7e;
    border: 2px #437c7e solid;
  }
`;

export const ButtonWithBorder = styled(ButtonBlue)`
  width: 145px;
  height: 45px;
  color: #afeeee;
  background-color: #2c3531;

  &:hover {
    color: #437c7e;
    background-color: #2c3531;
  }
`;

export const TitleH1 = styled.h1`
  margin: 40px 0;
`;

// Переменные, которые были в CSS

// $colorOfMainHeader: #FFFFFF;
// $colorOfSilver: #899D9D;
// $background: #2C3531;
// $backgroundShade: #2C3531;
// $colorOfText: #116466;
// $primaryWindowColor: #AFEEEE;
// $onActiveColor: #437C7E;
// $onFocusColor: #699596;
// $onHoverColor: #8EAFAF;
// $shadeBorder: #0B191A;

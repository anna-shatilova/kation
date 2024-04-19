import { AppRoutes } from './routes/Routes';
import { Header } from './components/header/Header';
// import { GalleryFotoGold } from './pages/gallery-foto-gold/GalleryFotoGold';
// import { Gallery } from './pages/gallery/gallery';
import { Mainpage } from './pages/mainpage/mainpage';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    palette: {
      background: {
        wrap: '#899D9D',
        card: '#2C3531',
      },
      // text: {
      //   primary: '#173A5E',
      //   secondary: '#46505A',
      // },
      // action: {
      //   active: '#001E3C',
      // },
      // success: {
      //   dark: '#009688',
      // },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <AppRoutes>
          <Mainpage />
          {/* <Gallery /> */}
          {/* <GalleryFotoGold /> */}
        </AppRoutes>
      </ThemeProvider>
    </div>
  );
}

export default App;

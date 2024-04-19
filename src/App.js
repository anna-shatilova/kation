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

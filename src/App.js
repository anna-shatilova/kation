import { AppRoutes } from './routes/Routes';
import { Header } from './components/header/Header';
import { Mainpage } from './pages/mainpage/mainpage';
import { Footer } from './components/footer/Footer';
import { GlobalStyles, WrapGreen } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <WrapGreen>
        {/* <Container> */}
          <Header />
          <AppRoutes>
            <Mainpage />
          </AppRoutes>
          <Footer />
        {/* </Container> */}
      </WrapGreen>
    </>
  );
}

export default App;

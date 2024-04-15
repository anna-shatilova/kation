import './App.css';
import { Header } from './components/header/Header';
import { GalleryFotoGold } from './pages/gallery-foto-gold/GalleryFotoGold';
// import { Gallery } from './pages/gallery/gallery';
// import { Mainpage } from './pages/mainpage/mainpage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Mainpage>
      </Mainpage> */}
      {/* <Gallery /> */}
      <GalleryFotoGold />
    </div>
  );
}

export default App;

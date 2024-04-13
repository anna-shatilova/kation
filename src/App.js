import './App.css';
import { Header } from './components/header/Header';
import { Gallery } from './pages/gallery/gallery';
// import { Mainpage } from './pages/mainpage/mainpage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Mainpage>
      </Mainpage> */}
      <Gallery />
    </div>
  );
}

export default App;

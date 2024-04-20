import { AppRoutes } from './routes/Routes';
import { Header } from './components/header/Header';
import { Mainpage } from './pages/mainpage/mainpage';
import './styles/App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/material-ui/themeMui';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <AppRoutes>
          <Mainpage />
        </AppRoutes>
      </ThemeProvider>
    </div>
  );
}

export default App;

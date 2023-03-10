import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom';
import Home from 'pages/home/home';
import Login from 'pages/login/login';
import Profile from 'pages/profile/profile';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';


function App() {
  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path='/'
              element={<Login />} />
            <Route
              path='/home'
              element={isAuth ? <Home /> : <Navigate to="/" />} />
            <Route
              path='/profile/:userId'
              element={isAuth ? <Profile /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

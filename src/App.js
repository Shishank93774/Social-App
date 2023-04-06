import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Profile from 'pages/profile/Profile';
import Chat from 'pages/chat/Chat';
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
            <Route
              path='/chat'
              element={isAuth ? <Chat /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

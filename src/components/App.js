import { ThemeContext  } from '../ThemeContext';
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';

import '../styles/App.css';

import Login from './Login';
import Home from './Home';
import ButtonIcon from './ButtonIcon';

import imgDark from '../img/dark.png';
import imgLight from '../img/light.png';

import Modal from '../components/Modal';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // tela de carregamento
  }

  return (
    <div className={theme}>
      <Router>
        <Routes>
          <Route 
            path='/login'
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route 
            path='/'
            element={user ? 
              <Home 
                buttonThemeContent={
                  <ButtonIcon 
                  onClickFunction={toggleTheme}
                  icon={theme === 'light' ? imgDark : imgLight}
                  />
                }
              /> : <Navigate to="/login" />}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
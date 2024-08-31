import '../styles/Theme.css';
import '../styles/App.css';
import Header from './Header';
import Timer from './Timer';
import Footer from './Footer';
import { ThemeContext  } from '../ThemeContext';
import React, { useContext } from 'react';
import ButtonIcon from './ButtonIcon';
import imgDark from '../img/dark.png';
import imgLight from '../img/light.png';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme} id='container'>
      <Header
        buttonThemeContent={
          <ButtonIcon 
            function={toggleTheme}
            icon={theme === 'light' ? imgDark : imgLight}
          />
        }
      />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
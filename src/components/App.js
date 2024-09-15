import '../styles/App.css';
import Header from './Header';
import Timer from './Timer';
import Footer from './Footer';
import { ThemeContext  } from '../ThemeContext';
import React, { useContext } from 'react';
import ButtonIcon from './ButtonIcon';
import imgDark from '../img/dark.png';
import imgLight from '../img/light.png';
import Sidebar from './Sidebar';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div id='container'>
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
      <Sidebar
          buttonThemeContent={
          <ButtonIcon 
            function={toggleTheme}
            icon={theme === 'light' ? imgDark : imgLight}
          />
        }
      />
    </div>
  );
}

export default App;
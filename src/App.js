import './App.css';
import Header from './components/header/Header';
import Timer from './Timer';
import Footer from './components/footer/Footer'
import Lofi from './components/lofi/Lofi';

function App(props) {
  return (
    <div>
      <Header />
      <Timer />
      <Lofi />
      <Footer />
    </div>
  );
}

export default App;
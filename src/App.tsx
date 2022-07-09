import { Header } from './components/home/Header';
import { Footer } from './components/home/Footer';
import './App.scss';
import { Carousel } from './components/home/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;

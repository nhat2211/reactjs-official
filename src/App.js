import './App.css';

import Navigation from './components/Navigation';
import Player from './components/Player';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation className="App"/>
      <Player/>
      <Footer/>
    </div>
   
  );
}

export default App;
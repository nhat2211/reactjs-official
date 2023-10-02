import './App.css';

import Navigation from './components/Navigation';
import PlayersPresentation from './components/Player';
import Footer from './components/Footer';
import Main from './components/Main';
import Demo from './components/Demo';

function App() {
  return (
    <div>
      {/* <Demo/> */}
      <Navigation className="App" />
       {/* <PlayersPresentation/> */}
      <Main/>
      <Footer/>
    </div>
   
  );
}

export default App;
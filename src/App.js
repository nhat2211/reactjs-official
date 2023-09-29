import './App.css';

import Navigation from './components/Navigation';
import PlayersPresentation from './components/Player';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Navigation className="App"/>
       {/* <PlayersPresentation/> */}
      <Main name="test"/>
      <Footer/>
    </div>
   
  );
}

export default App;
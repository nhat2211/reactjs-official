import './App.css';

import Navigation from './components/Navigation';
import PlayersPresentation from './components/PlayersPresentation';
import Footer from './components/Footer';
import Main from './components/Main';
import Demo from './components/Demo';
import Example from './components/Example';
import ExampleWithEffect from './components/ExampleWithEffect';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import { createContext, useState } from 'react';
import Detail from './components/Detail';

function App() {
  const CartContext = createContext();
  return (
    <div>
    
      <Navigation className="App" />

      <Routes>

        <Route path='/' element={<Main/>}>

        </Route>

        <Route path='/detail/:id' element={<Detail/>}></Route>

        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>

       
       <Footer/>
    </div>
   
  );
}

export default App;
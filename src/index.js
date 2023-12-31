import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-social/bootstrap-social.css';
// import 'bootstrap5-toggle/css/bootstrap5-toggle.css'
// import 'bootstrap5-toggle/css/bootstrap5-toggle.min.css'
import 'font-awesome/css/font-awesome.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min.js';
import './index.css';

import App from './App';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
import CartProvider, { CartContext } from './components/CartContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
      <BrowserRouter>

         <App />
      </BrowserRouter>

      </CartProvider>
     
     
      
   
    </ThemeProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

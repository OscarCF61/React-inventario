import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './js/Header';
import Tablas from './js/Tablas';
import Footer from './js/Footer';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Tablas/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Services />
  </React.StrictMode>,
  document.getElementById('root')
);

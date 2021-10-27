import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Banner from './Banner';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>,
  document.getElementById('root')
);

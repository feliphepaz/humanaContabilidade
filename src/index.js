import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Benefits from './Benefits';
import SocialProof from './SocialProof';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Services />
    <Benefits />
    <SocialProof />
  </React.StrictMode>,
  document.getElementById('root')
);

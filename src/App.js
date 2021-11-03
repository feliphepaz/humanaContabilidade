import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Empresa from './Empresa';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='empresa' element={<Empresa />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Empresa from './Empresa';
import Produtos from './Produtos';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='empresa' element={<Empresa />} />
        <Route path='servicos' element={<Produtos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


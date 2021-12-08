import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Empresa from './Empresa';
import Produtos from './Produtos';
import Parceiros from './Parceiros';
import Contato from './Contato';
import Portal from './Portal';
import Cookie from './Cookie';

function animeScroll() {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else if(element.classList.contains(animationClass)) {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener('scroll', animeScroll);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='empresa' element={<Empresa />} />
        <Route path='servicos' element={<Produtos />} />
        <Route path='parceiros' element={<Parceiros />} />
        <Route path='contato' element={<Contato />} />
        <Route path='portal' element={<Portal />} />
      </Routes>
      <Footer />
      <Cookie />
    </BrowserRouter>
  )
}

export default App


import React from 'react';
import logo from './Assets/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import menu from './Assets/menu.png';
import cancel from './Assets/cancel.png';

console.log(cancel);

function handleMobile(e) {
  const element = e.currentTarget;
  const menuMobile = document.querySelector('.menu-mobile');
  element.classList.toggle('active-mobile');
  if (element.classList.contains('active-mobile')) {
    element.children[0].src = cancel;
    menuMobile.style.display = 'block';
  } else {
    element.children[0].src = menu;
    menuMobile.style.display = 'none';
  }
}

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <nav className='menu'>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="empresa" end>Empresa</NavLink></li>
            <li><NavLink to="servicos" end>Serviços</NavLink></li>
            <li><NavLink to="parceiros" end>Parceiros</NavLink></li>
            <li><NavLink to="contato" end>Contato</NavLink></li>
          </ul>
        </nav>
        <button className='btn-mobile' onClick={handleMobile}><img src={menu}></img></button>
        <nav className='menu-mobile'>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="empresa" end>Empresa</NavLink></li>
            <li><NavLink to="servicos" end>Serviços</NavLink></li>
            <li><NavLink to="parceiros" end>Parceiros</NavLink></li>
            <li><NavLink to="contato" end>Contato</NavLink></li>
            <li><a className='portal' href='#'>Área do Cliente</a></li>
          </ul>
        </nav>
        <a className='portal' href='#'>Área do Cliente</a>
      </div>
    </header>
  );
}

export default Header;

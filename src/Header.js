import React from 'react';
import logoMain from './Assets/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import menu from './Assets/menu.png';
import menuAlt from './Assets/menu-alt.png'
import logoAlt from './Assets/logo-alt.png';
import cancel from './Assets/cancel.png';
import cancelAlt from './Assets/cancel-alt.png';

window.addEventListener('scroll', () => {
  const btnMobile = document.querySelector('.btn-mobile img');
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo img');
  if (window.pageYOffset > 50) {
    header.classList.add('active-scroll');
    logo.src = logoAlt;
    btnMobile.src = menuAlt;
  } else {
    header.classList.remove('active-scroll');
    logo.src = logoMain;
    btnMobile.src = menu;
  }
})

function handleMobile(e) {
  const element = e.currentTarget;
  const menuMobile = document.querySelector('.menu-mobile');
  element.classList.toggle('active-mobile');
  if (element.classList.contains('active-mobile')) {
    element.children[0].src = cancel;
    menuMobile.style.display = 'block';
    if (window.pageYOffset > 50) {
      element.children[0].src = cancelAlt;
    }
  } else {
    element.children[0].src = menu;
    menuMobile.style.display = 'none';
    if (window.pageYOffset > 50) {
      element.children[0].src = menuAlt;
    }
  }
}

function toTop() {
  window.scrollTo(0, 0);
}

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <img src={logoMain}></img>
        </div>
        <nav className='menu'>
          <ul>
            <li><NavLink onClick={toTop} to="/" end>Home</NavLink></li>
            <li><NavLink onClick={toTop} to="empresa" end>Empresa</NavLink></li>
            <li><NavLink onClick={toTop} to="servicos" end>Serviços</NavLink></li>
            <li><NavLink onClick={toTop} to="parceiros" end>Parceiros</NavLink></li>
            <li><NavLink onClick={toTop} to="contato" end>Contato</NavLink></li>
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

import React from 'react';
import logo from './img/logo.png';
import './css/header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <nav className='menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Empresa</a></li>
            <li><a href='#'>Serviços</a></li>
            <li><a href='#'>Parceiros</a></li>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>
        <a className='portal' href='#'>Área do Cliente</a>
      </div>
    </header>
  );
}

export default Header;

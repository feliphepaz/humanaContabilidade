import React from 'react';
import logo from './Assets/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

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
        <a className='portal' href='#'>Área do Cliente</a>
      </div>
    </header>
  );
}

export default Header;

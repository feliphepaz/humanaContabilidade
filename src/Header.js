import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

// Logo
import logoMain from './Assets/logo.png';
import logoAlt from './Assets/logo-alt.png';

// Open
import menu from './Assets/menu.png';
import menuAlt from './Assets/menu-alt.png'

// Close
import cancel from './Assets/cancel.png';
import cancelAlt from './Assets/cancel-alt.png';

function Header() {
  const [scroll, setScroll] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);

  function toTopAndClose() {
    window.scrollTo(0,0);
    setMenuMobile(false);
  }

  function handleChanges() {
    if (scroll && menuMobile) {
      return cancelAlt;
    } 
    else if (scroll) {
      return menuAlt;
    }
    else if (menuMobile) {
      return cancel;
    }
    else {
      return menu;
    }
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  })

  return (
    <header className={scroll ? 'header active-scroll' : 'header'}>
      <div className='container'>
        <div className='logo'>
        <NavLink onClick={() => window.scrollTo(0,0)} to="/" end><img src={scroll ? logoAlt : logoMain} alt=''></img></NavLink>
        </div>
        <nav className='menu'>
          <ul>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="/" end>Home</NavLink></li>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="empresa">Empresa</NavLink></li>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="servicos">Serviços</NavLink></li>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="parceiros">Parceiros</NavLink></li>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="noticias">Notícias</NavLink></li>
            <li><NavLink onClick={() => window.scrollTo(0,0)} to="contato">Contato</NavLink></li>
          </ul>
        </nav>
        <button className='btn-mobile' onClick={() => setMenuMobile(!menuMobile)}><img src={handleChanges()} alt=''></img></button>
        <nav className='menu-mobile' style={menuMobile ? {display: 'block'} : {display: 'none'}}>
          <ul>
            <li><NavLink onClick={toTopAndClose} to="/" end>Home</NavLink></li>
            <li><NavLink onClick={toTopAndClose} to="empresa">Empresa</NavLink></li>
            <li><NavLink onClick={toTopAndClose} to="servicos">Serviços</NavLink></li>
            <li><NavLink onClick={toTopAndClose} to="parceiros">Parceiros</NavLink></li>
            <li><NavLink onClick={toTopAndClose} to="noticias">Notícias</NavLink></li>
            <li><NavLink onClick={toTopAndClose} to="contato">Contato</NavLink></li>
            <li><NavLink onClick={toTopAndClose} className='portal' to="portal">Área do Cliente</NavLink></li>
          </ul>
        </nav>
        <NavLink onClick={toTopAndClose} className='portal' to="portal">Área do Cliente</NavLink>
      </div>
    </header>
  );
}

export default Header;

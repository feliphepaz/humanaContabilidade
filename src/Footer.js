import React from 'react';
import './Footer.css';
import logo from './Assets/logo-alt.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <div className='container'>
                <div className='call-to-action'>
                    <p>
                            Conhecer o homem - esta é a base de todo o sucesso.
                            <legend>Charles Chaplin</legend>
                    </p>
                    <div className='banner-btns'>
                            <Link onClick={() => window.scrollTo(0,0)} to='contato' className='cta'>Contato</Link>
                            <Link onClick={() => window.scrollTo(0,0)} to='empresa' className='btn'>Conheça mais</Link>
                    </div>
                </div>
                <div className='divide-footer'></div>
                <div className='navegation'>
                    <div className='logo-footer'>
                        <img src={logo} alt=''></img>
                    </div>
                    <nav>
                        <h4>A empresa</h4>
                        <ul>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='/'>Home</Link></li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='empresa'>Empresa</Link></li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='servicos'>Serviços</Link></li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='parceiros'>Parceiros</Link></li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='contato'>Contato</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>Serviços</h4>
                        <ul>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='contato'>Abrir empresa</Link></li>
                            <li><Link onClick={() => window.scrollTo(0,0)} to='contato'>Migrar empresa</Link></li>
                        </ul>
                    </nav>
                    <nav className='social'>
                        <h4>Redes sociais</h4>
                        <ul>
                            <li className='facebook'><a href='https://www.facebook.com/humanacontabilidade' target='_blank'>Facebook</a></li>
                            <li className='instagram'><a href='https://www.instagram.com/humanacontabilidade/' target='_blank'>Instagram</a></li>
                            <li className='linkedin'><a href='https://www.linkedin.com/company/humanacontabilidade/' target='_blank'>LinkedIn</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>Visite</h4>
                        <ul>
                            <li>Endereço contabil</li>
                            <li>São Paulo - SP</li>
                            <li>00000-000</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>

        <section className='copy'>
            <div className='container'>
                <p>2021 - Humana Contabilidade. Todos os direitos reservados.</p>
                <p>Design by Agência Formulaviral</p>
            </div>
        </section>
        </>
    )
}

export default Footer

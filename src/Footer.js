import React from 'react';
import './Footer.css';
import logo from './Assets/logo-alt.png';

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <div className='container'>
                <div className='call-to-action'>
                    <p>
                        Lorem ipsum dolor sit dua,
                        consectetur adipisicing.
                    </p>
                    <div className='banner-btns'>
                            <a href='#' className='cta'>Fale Conosco</a>
                            <a href='#' className='btn'>Clique Aqui</a>
                    </div>
                </div>
                <div className='divide-footer'></div>
                <div className='navegation'>
                    <div className='logo-footer'>
                        <img src={logo}></img>
                    </div>
                    <nav>
                        <h4>A empresa</h4>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Empresa</a></li>
                            <li><a href='#'>Serviços</a></li>
                            <li><a href='#'>Parceiros</a></li>
                            <li><a href='#'>Contato</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href='#'>Nome do serviço</a></li>
                            <li><a href='#'>Nome do serviço</a></li>
                            <li><a href='#'>Nome do serviço</a></li>
                        </ul>
                    </nav>
                    <nav className='social'>
                        <h4>Redes sociais</h4>
                        <ul>
                            <li className='facebook'><a href='#'>Facebook</a></li>
                            <li className='instagram'><a href='#'>Instagram</a></li>
                            <li className='youtube'><a href='#'>YouTube</a></li>
                            <li className='linkedin'><a href='#'>LinkedIn</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>Visite</h4>
                        <ul>
                            <li><a href='#'>Endereço contabil</a></li>
                            <li><a href='#'>São Paulo - SP</a></li>
                            <li><a href='#'>00000-000</a></li>
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

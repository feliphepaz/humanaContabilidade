import React from 'react'
import './Servicos.css'
import clientes from '../Assets/clientesdecontabilidade.jpg';
import { Link } from 'react-router-dom';

const Servicos = () => {
    return (
        <section className='services'>
            <img src={clientes} alt=''></img>
            <div className='container' data-anime='down'>
                <h2>No que podemos te ajudar?</h2>
                <p>Além dos serviços mais procurados, os de abrir e migrar empresa, também oferecemos outros tipos de consultorias para diversos outros ramos. <Link onClick={() => window.scrollTo(0,0)} to='servicos'>Saiba mais</Link>.</p>
                <nav className='services-nav'>
                    <Link onClick={() => window.scrollTo(0,0)} to='contato'>Abrir<br></br>empresa</Link>
                    <Link onClick={() => window.scrollTo(0,0)} to='contato'>Migrar<br></br>empresa</Link>
                </nav>
            </div>
        </section>
    )
}

export default Servicos

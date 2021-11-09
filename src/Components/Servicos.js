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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                <nav className='services-nav'>
                    <Link to=''>Abrir<br></br>empresa</Link>
                    <Link to=''>Migrar<br></br>empresa</Link>
                </nav>
            </div>
        </section>
    )
}

export default Servicos

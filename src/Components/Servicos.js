import React from 'react'
import './Servicos.css'
import clientes from '../Assets/clientesdecontabilidade.jpg';

const Servicos = () => {
    return (
        <section className='services'>
            <img src={clientes}></img>
            <div className='container' data-anime='down'>
                <h2>No que podemos te ajudar?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                <nav className='services-nav'>
                    <a href='#'>Abrir<br></br>empresa</a>
                    <a href='#'>Migrar<br></br>empresa</a>
                </nav>
            </div>
        </section>
    )
}

export default Servicos

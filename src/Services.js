import React from 'react'
import './css/services.css'
import clientes from './img/clientesdecontabilidade.jpg';

const Services = () => {
    return (
        <section className='services'>
            <img src={clientes}></img>
            <div className='container'>
                <h2>No que podemos te ajudar?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
            </div>
        </section>
    )
}

export default Services

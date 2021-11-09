import React from 'react'
import './Banner.css';
import bg from '../Assets/ilustra.png';  
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container animate' data-anime='down'>
                <div className='banner-text'>
                    <h1><span>Sucesso é a soma</span>de pequenos esforços</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    <div className='banner-btns'>
                        <Link to="contato" className='cta'>Fale conosco</Link>
                        <Link to="contato" className='btn'>Clique aqui</Link>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={bg} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default Banner

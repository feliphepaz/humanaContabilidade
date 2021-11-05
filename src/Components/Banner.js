import React from 'react'
import bg from '../Assets/ilustra.png';  
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container animate' data-anime='down'>
                <div className='banner-text'>
                    <h1><span>Sucesso é a soma</span>de pequenos esforços</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    <div className='banner-btns'>
                        <a href='#' className='cta'>Fale Conosco</a>
                        <a href='#' className='btn'>Clique Aqui</a>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={bg}></img>
                </div>
            </div>
        </section>
    )
}

export default Banner

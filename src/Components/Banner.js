import React from 'react'
import './Banner.css';
import bg from '../Assets/ilustra.png';  
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container animate' data-anime='down'>
                <div className='banner-text'>
                    <h1><span>Contabilidade humanizada</span>do jeito que você queria</h1>
                    <p>A Humana é o escritório de contabilidade com expertise em atender empresas de prestação de serviços em geral.</p>
                    <div className='banner-btns'>
                        <Link to="contato" className='cta'>Fale conosco</Link>
                        <Link to="empresa" className='btn'>Conheça mais</Link>
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

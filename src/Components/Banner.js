import React from 'react'
import './Banner.css';
import bg from '../Assets/ilustra.png';  
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
        <section className='banner'>
            <div className='container animate' data-anime='down'>
                <div className='banner-text'>
                    <h1><span>Contabilidade humanizada</span>do jeito que você queria</h1>
                    <p>A Humana é o escritório de contabilidade com expertise em atender empresas de prestação de serviços em geral.</p>
                    <div className='banner-btns'>
                        <Link to="contato" onClick={() => window.scrollTo(0,0)} className='cta'>Fale conosco</Link>
                        <Link to="empresa" onClick={() => window.scrollTo(0,0)} className='btn'>Conheça mais</Link>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={bg} alt=''></img>
                </div>
            </div>
        </section>

        <section className='irpf-cta'>
            <div className='container'>
                <Link to="/noticias/irpf2022" onClick={() => window.scrollTo(0,0)}>
                    <h2>Saiba tudo sobre o imposto de renda 2022!</h2>
                </Link>
            </div>
        </section>
        </>
    )
}

export default Banner

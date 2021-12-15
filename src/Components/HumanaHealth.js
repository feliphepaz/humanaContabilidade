import React from 'react'
import { Link } from 'react-router-dom'
import healthLogo from '../Assets/humana_health.svg';
import './HumanaHealth.css';

const HumanaHealth = () => {
    return (
        <section className='humana-health'>
            <div className='container' data-anime='left'>
                <div className='humana-health-img'>
                    <img src={healthLogo} alt="" />
                </div>
                <div className='humana-health-info'>
                    <p>O bem-estar e a qualidade de vida são os nossos bens mais valiosos, e pensando nisso, a Humana tem o serviço contábil perfeito para o prestador de serviço da área da saúde. Entre em contato para saber mais.</p>
                    <Link to="/contato" onClick={() => window.scrollTo(0,0)} className='cta'>Fale conosco</Link>
                </div>
            </div>
        </section>
    )
}

export default HumanaHealth

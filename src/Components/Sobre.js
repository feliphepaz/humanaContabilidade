import React from 'react'
import './Sobre.css';
import boneca1 from '../Assets/boneca_1.png';

const Sobre = () => {
    return (
        <section className='sobre'>
            <div className='container animate' data-anime='left'>
                <div className='sobre-text'>
                    <h2>O que é a <span>Humana</span> <span>Contabilidade?</span></h2>
                    <p>
                        A Humana Contabilidade presta assessoria através de uma equipe treinada e qualificada nas áreas contábil, fiscal, pessoal, imposto de renda, auditoria, societária e tributária, com foco em prestadoras de serviços.
                    </p>
                </div>
                <div className='sobre-img'>
                    <img src={boneca1} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default Sobre

import React from 'react'
import './Parceiros.css';
import brooklin from './Assets/brooklin.png';
import dape from './Assets/dape.png';
import fpc from './Assets/fpc.png';
import caema from './Assets/caema.png';
import patriciasalmona from './Assets/patriciasalmona.png';
import cepec from './Assets/cepec.png';
import equilibriumm from './Assets/equilibriumm.png';

const Parceiros = () => {
    return (
        <section className='parceiros-intro'>
            <div className='container'>
                <div className='parceiros-intro-text animate' data-anime='left'>
                    <h2>Nossos clientes são a prova de um trabalho <span>feito com amor</span></h2>
                    <p>Nossa empresa sempre teve como qualidade oferecer aos nossos clientes soluções para agilizar e tornar profissional seus serviços. Por isso contamos com parceiros que mantêm o mesmo método de trabalho de nossa empresa.</p>
                </div>
                <ul className='logos animate' data-anime='right'>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={brooklin} alt=''></img>
                        </div>
                        <div>
                            <p>Em atuação no Brasil há 20 anos, a Brooklin é uma seguradora especializada em seguros de vida e na venda personalizada.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={dape} alt=''></img>
                        </div>
                        <div>
                            <p>A Dape Capital é uma boutique de investimentos em criptomoedas, pautada em um conceito Private de atendimento e gestão de patrimônio.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={fpc} alt=''></img>
                        </div>
                        <div>
                            <p>A F Prati Consulting é uma empresa que oferece serviços de engenharia aos seus clientes, no ramo de consultoria em construções.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={caema} alt=''></img>
                        </div>
                        <div>
                            <p>A Caema Brasil é uma empresa voltada à consultoria técnica em engenharia de materiais e novas tecnologias.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={patriciasalmona} alt=''></img>
                        </div>
                        <div>
                            <p>Dra. Patrícia Salmona é médica pediatra e geneticista especializada em Síndrome de Down. Atualmente comanda a Salmona Clínica Médica.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={cepec} alt=''></img>
                        </div>
                        <div>
                            <p>A CEPEC-SP é uma clínica de atendimento pediátrico e genético, com foco em Trissomia 21 (Síndrome de Down).</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={equilibriumm} alt=''></img>
                        </div>
                        <div>
                            <p>A Equilibriumm nasceu em 2012 com o propósito de levar a seus pacientes recursos terapêuticos  que proporcionem uma melhor qualidade de vida.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parceiros

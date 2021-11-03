import React from 'react';
import './Benefits.css';
import globe from '../Assets/globe.png';
import search from '../Assets/search.png';
import suitcase from '../Assets/suitcase.png';

const Benefits = () => {
    return (
        <section className='benefits'>
            <div className='container'>
                <h2>Burocracia<br></br><span>nunca mais</span></h2>
                <ul className='benefits-itens'>
                    <li>
                        <div className='benefit-title digital'>
                            <span>
                                <img src={globe}></img>
                            </span>
                            <h3>Ambiente Digital</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </li>
                    <li>
                        <div className='benefit-title consultoria'>
                            <span>
                                <img src={search}></img>
                            </span>
                            <h3>Consultoria em processo</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </li>
                    <li>
                        <div className='benefit-title profissionais'>
                            <span>
                                <img src={suitcase}></img>
                            </span>
                            <h3>Profissionais Capacitados</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Benefits

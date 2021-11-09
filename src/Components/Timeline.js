import React from 'react';
import './Timeline.css';
import asteca from '../Assets/icon-asteca.png';
import estocolmo from '../Assets/icon-estocolmo.png';
import moinhos from '../Assets/icon-moinhos.png';
import montanha from '../Assets/icon-montanha.png';
import saoFrancisco from '../Assets/icon-sao-francisco.png';

const Timeline = () => {
    return (
        <section className='timeline'>
            <div className='container' data-anime='down'>
                <ul className='timeline-itens'>
                    <li>
                        <img src={asteca} alt=''></img>
                        <legend>1999</legend>
                        <h3>O começo de uma história</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </li>
                    <li>
                        <img src={estocolmo} alt=''></img>
                        <legend>2005</legend>
                        <h3>Expandimos os nossos serviços</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </li>
                    <li>
                        <img src={moinhos} alt=''></img>
                        <legend>2010</legend>
                        <h3>Um escritório completo</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </li>
                    <li>
                        <img src={montanha} alt=''></img>
                        <legend>2016</legend>
                        <h3>A Prover muda (para melhor)</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </li>
                    <li>
                        <img src={saoFrancisco} alt=''></img>
                        <legend>2021</legend>
                        <h3>Nasce um novo conceito</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Timeline

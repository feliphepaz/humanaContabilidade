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
                        <p>Tudo começou com Dilma Cachoeira, a nossa C.E.O, que após a sua formação em contabilidade, decidiu fundar o seu próprio escritório.</p>
                    </li>
                    <li>
                        <img src={estocolmo} alt=''></img>
                        <legend>2005</legend>
                        <h3>Expandimos os nossos serviços</h3>
                        <p>Agora já com uma história, a Prover, a mãe da Humana Contabilidade, expande os horizontes e começa a oferecer outros serviços em seu catalogo.</p>
                    </li>
                    <li>
                        <img src={moinhos} alt=''></img>
                        <legend>2010</legend>
                        <h3>Um escritório completo</h3>
                        <p>Agora estamos bem estabilizados, com clientes fieis e muitas consultorias prestadas. Mas como sempre evitamos a zona de conforto, algo precisaria ser feito.</p>
                    </li>
                    <li>
                        <img src={montanha} alt=''></img>
                        <legend>2016</legend>
                        <h3>A Prover muda (para melhor)</h3>
                        <p>Com as altas taxas de impostos e burocratização do mercado de prestação de serviços, surge a necessidade de se fazer algo a respeito. Assim, a Prover se torna Humana.</p>
                    </li>
                    <li>
                        <img src={saoFrancisco} alt=''></img>
                        <legend>2021</legend>
                        <h3>Nasce um novo conceito</h3>
                        <p>A filosofia da Humana é herdada daquilo que já era feito com excelência na Prover: suporte total ao cliente e satisfação total nos ofícios prestados, mas agora com foco em serviços.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Timeline

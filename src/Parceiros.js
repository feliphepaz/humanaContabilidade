import React from 'react'
import './Parceiros.css';
import logoRandom1 from './Assets/logo-random1.svg';
import logoRandom2 from './Assets/logo-random2.svg';
import logoRandom3 from './Assets/logo-random3.svg';
import eduardo from './Assets/eduardo.png';

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
                        <img className='logo-empresa' src={logoRandom1} alt=''></img>
                        <div>
                            <p>A Abrandis é uma empresa brasileira do setor varejista, mais especificamente na venda de tecidos, cuja matriz está instalada em São Bernardo do Campo. </p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Paulo Silveira</h4>
                                        <span>C.E.O da Abrandis</span>
                                    </div>
                                </div>
                                <p>A Humana fez um milagre com a Abrandis! Conseguiram resolver todas as nossas pendência em tempo record.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className='logo-empresa' src={logoRandom2} alt=''></img>
                        <div>
                            <p>A Okra é uma empresa de tecnologia e informática brasileira, especializada no desenvolvimento e comercialização de hardware.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Gustavo Ribeiro</h4>
                                        <span>Head de Marketing da Okra</span>
                                    </div>
                                </div>
                                <p>Somos clientes deles desde 2014 e gostamos muito dos serviços prestados.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className='logo-empresa' src={logoRandom3} alt=''></img>
                        <div>
                            <p>Cinthia Doces é uma pequena empresa localizada em Foz do Iguaçu que comercializa bolos e confeitaria em geral.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Cinthia Fugazzi</h4>
                                        <span>Microempreendedora</span>
                                    </div>
                                </div>
                                <p>O suporte que eu tenho na Humana eu não tenho em lugar nenhum, gosto muito dos contadores.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parceiros

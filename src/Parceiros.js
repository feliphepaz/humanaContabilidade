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
                <div className='parceiros-intro-text'>
                    <h2>Nossos clientes são a prova de um trabalho <span>feito com amor</span></h2>
                    <p>Nossa empresa sempre teve um objetivo muito claro, que é oferecer aos nossos clientes soluções para agilizar e tornar profissional seus serviços. Por isso contamos com parceiros que mantêm o mesmo método de trabalho de nossa empresa.</p>
                </div>
                <ul className='logos'>
                    <li>
                        <img className='logo-empresa' src={logoRandom1}></img>
                        <div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo}></img>
                                    </div>
                                    <div>
                                        <h4>Paulo Silveira</h4>
                                        <span>C.E.O da Abrandis</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className='logo-empresa' src={logoRandom2}></img>
                        <div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo}></img>
                                    </div>
                                    <div>
                                        <h4>Gustavo Ribeiro</h4>
                                        <span>Head de Marketing da Okra</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className='logo-empresa' src={logoRandom3}></img>
                        <div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={eduardo}></img>
                                    </div>
                                    <div>
                                        <h4>Cinthia Fugazzi</h4>
                                        <span>Diretora Financeira da Kostom T.I</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parceiros

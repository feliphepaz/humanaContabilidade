import React from 'react';
import './ProvaSocial.css';
import eduardo from '../Assets/eduardo.png';
import star from '../Assets/star.png';

const ProvaSocial = () => {
    return (
        <>
        <section className='statistics' data-anime='left'>
            <div className='container'>
                <ul className='data'>
                    <li>
                        <span>+1000</span>
                        <p>clientes atendidos</p>
                    </li>
                    <li>
                        <span>+10</span>
                        <p>anos de mercado</p>
                    </li>
                    <li>
                        <span>90%</span>
                        <p>taxa de sucesso</p>                    
                    </li>
                    <li>
                        <span>+1000</span>
                        <p>clientes atendidos</p>                    
                    </li>
                </ul>
            </div>
        </section>

        <section className='social-proof'>
            <div className='container'>
                <h3>Clientes Satisfeitos</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <ul className='documentaries'>
                    <li>
                        <div className='profile'>
                            <div>
                                <img src={eduardo}></img>
                            </div>
                            <div>
                                <h4>Eduardo Correa</h4>
                                <span>Cliente</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <div className='rating'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>
                    </li>
                    <li>
                        <div className='profile'>
                            <div>
                                <img src={eduardo}></img>
                            </div>
                            <div>
                                <h4>Eduardo Correa</h4>
                                <span>Cliente</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <div className='rating'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default ProvaSocial

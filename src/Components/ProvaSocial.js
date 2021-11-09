import React from 'react';
import './ProvaSocial.css';
import eduardo from '../Assets/eduardo.png';
import star from '../Assets/star.png';

const perfis = [
    {
        id: 1,
        nome: 'Eduardo Correa',
        ocupação: 'Cliente',
        foto: eduardo,
        avaliação: 5,
    },
    {
        id: 2,
        nome: 'Eduardo Correa',
        ocupação: 'Cliente',
        foto: eduardo,
        avaliação: 5,
    }
]

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
                    {perfis.map((per) => (
                        <li key={per.id}>
                            <div className='profile'>
                                <div>
                                    <img src={per.foto} alt=''></img>
                                </div>
                                <div>
                                    <h4>{per.nome}</h4>
                                    <span>{per.ocupação}</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <div className='rating'>
                                {[...Array(per.avaliação)].map((item, index) => (
                                    <img key={index} src={star} alt=''></img>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}

export default ProvaSocial

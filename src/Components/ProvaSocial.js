import React from 'react';
import './ProvaSocial.css';
import eduardo from '../Assets/eduardo.png';
import star from '../Assets/star.png';

const perfis = [
    {
        id: 1,
        nome: 'Marisa Costa',
        ocupação: 'Diretora Financeira da Orange',
        foto: eduardo,
        avaliação: 5,
        comentario: 'Sou muito grata por tudo o que a Humana fez pela minha empresa. Sempre muito prestativos e atenciosos.',
    },
    {
        id: 2,
        nome: 'João Augusto',
        ocupação: 'C.E.O da Orange',
        foto: eduardo,
        avaliação: 5,
        comentario: 'Com muito prazer eu falo que a Humana cuida de todos os meus negócios. É o meu escritório de confiança, não troco por nenhuma outra.',
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
                <p>Veja o que estão falando de nós.</p>
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
                            <p>{per.comentario}</p>
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

import React from 'react';
import './ProvaSocial.css';
import patricia from '../Assets/patricia.png';
import daniele from '../Assets/daniele.png';
import star from '../Assets/star.png';

const perfis = [
    {
        id: 1,
        nome: 'Daniele Abdo',
        ocupação: 'C.E.O da Dape Capital',
        foto: daniele,
        avaliação: 5,
        comentario: 'Iniciei meu relacionamento com a Humana em 2014 e desde então nossa parceria vem se solidificando a cada dia. Sempre fui bem atendida e a cada nova demanda, a Humana vem me atendendo e superando minhas expectativas!',
    },
    {
        id: 2,
        nome: 'Dra. Patrícia Salmona',
        ocupação: 'Diretora da Salmona Clínica Médica',
        foto: patricia,
        avaliação: 5,
        comentario: 'A empresa Humana sempre supre 100% das minhas necessidades e solicitações. Prestam um atendimento com profissionalismo, praticidade, simpatia. Nunca fico sem um rápido retorno. Recomendo.',
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

import React from 'react'
import './Equipe.css';
import dilma from '../Assets/dilma.jpg';
import func1 from '../Assets/func1.jpg';
import func2 from '../Assets/func2.jpg';

const equipe = [
    {
        id: 1,
        nome: 'Dilma Cachoeira',
        funcao: 'C.E.O & Fundadora',
        historia: 'Bacharel em Ciências Contábeis desde 1996. Pós Graduada em Perícia Judicial e Planejamento Tributário Life Coaching pelo IBC (Instituto Brasileiro de Coaching). Empresária Contábil desde 1998.',
        foto: dilma,
    },
    {
        id: 2,
        nome: 'Guilherme Gomes',
        funcao: 'Contador',
        historia: 'Bacharel em Ciências Contábeis pela (Trevisan Escola de Negócios) e Analista Contábil Jr desde 2014 na Humana Contabilidade. Acredita que o mais importante é a evolução constante e a humanização no atendimento.',
        foto: func1,
    },
    {
        id: 3,
        nome: 'Leandro Murici',
        funcao: 'Contador',
        historia: 'Técnico em Administração pelo Centro Paula Souza (ETEC) e bacharel em Ciências Contábeis pela UNINOVE. "A busca pelo conhecimento é contínua, e é essencial para o sucesso profissional em qualquer área".',
        foto: func2,
    },
]

const Equipe = () => {
    return (
        <section className='equipe'>
            <ul className='container'>
                {equipe.map((funcionario) => (
                    <li key={funcionario.id} style={{backgroundImage: `url(${funcionario.foto})`}} data-anime={funcionario.id === 2 ? 'top' : 'down'}>
                        <div className='funcionario-dados'>
                            <h3>{funcionario.nome}</h3>
                            <legend>{funcionario.funcao}</legend>
                            <p>{funcionario.historia}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Equipe

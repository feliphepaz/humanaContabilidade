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
        historia: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        foto: dilma,
    },
    {
        id: 2,
        nome: 'Gabriel Alves',
        funcao: 'Contador',
        historia: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        foto: func1,
    },
    {
        id: 3,
        nome: 'Jorge Freitas',
        funcao: 'Contador',
        historia: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
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

import React from 'react';
import Image from './Assets/irpf2022.png';
import './Noticias.css';
import { Link } from 'react-router-dom';

const Noticias = () => {
    return (
        <section className='noticias'>
            <div className='container animate' data-anime='left'>
                <div className='noticias-header'>
                    <h2>Conheça nossos <span>conteúdos</span></h2>
                </div>
                <ul className='noticias-content'>
                    <Link to='irpf2022'>
                        <li>
                            <span className="data-noticia">Postado dia 06/03/2022, às 07:25</span>
                            <div className='image-noticia'>
                                <img src={Image}></img>
                            </div>
                            <div className='title-noticia'>
                                <h3>Veja todas as informações sobre o Imposto de Renda 2022</h3>
                                <p>A Receita Federal divulgou nesta quinta-feira, 24, as regras para a declaração do Imposto de Renda este ano, referente ao ano de 2021. A apresentação da declaração tem início no dia 7 de março, às 8 horas, e o prazo vai até 29 de abril, às 23h59.</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Noticias

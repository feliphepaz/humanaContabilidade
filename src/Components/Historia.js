import React from 'react'
import './Historia.css'
import boneca2 from '../Assets/boneca_3.png'

const Historia = () => {
    return (
        <section className='historia'>
            <div className='container' data-anime='right'>
                <div className='historia-img'>
                    <img src={boneca2} alt=''></img>
                </div>
                <div className='historia-text'>
                    <h2><span>Uma história</span> que te contabiliza.</h2>
                    <p>Inaugurada em 1999 com o nome Prover Contabilidade, já nascemos com um DNA voltado para a qua​lidade, com cumprimento de prazo, sigilo, eficácia e profissionalismo na realização dos serviços oferecidos aos nossos clientes.
                    <br></br>
                    <br></br>
                    Com a mesma filosofia mas com uma nova identidade, a Humana chega com o objetivo claro de trazer uma nova abordagem em áreas ainda bastante burocráticas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Historia

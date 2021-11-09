import React from 'react'
import './ProdutosIntro.css';
import contadores from '../Assets/contadores.jpg';

const ProdutosIntro = () => {
    return (
        <section className='produtos-intro'>
            <div className='container animate' data-anime='left'>
                <div className='produtos-intro-text'>
                    <h2>Os melhores serviços</h2>
                    <h2>Com a melhor qualidade</h2>
                    <h2>Com o melhor preço</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    <br></br>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                </div>
                <div className='produtos-intro-img'>
                    <img src={contadores} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default ProdutosIntro

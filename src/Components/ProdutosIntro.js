import React from 'react'
import './ProdutosIntro.css';
import contadores from '../Assets/contadores.jpg';
import { Link } from 'react-router-dom';

const ProdutosIntro = () => {
    return (
        <section className='produtos-intro'>
            <div className='container animate' data-anime='left'>
                <div className='produtos-intro-text'>
                    <h2>Os melhores serviços</h2>
                    <h2>Com a melhor qualidade</h2>
                    <h2>Com o melhor preço</h2>
                    <p>Tenha uma gestão fiscal e financeira para sua empresa. Somos especialistas na parte de tributos e contabilidade para prestadoras de serviços, como empresas da área da saúde, corretoras de seguro, consultoria financeira e empresarial, tecnologia da informação, e muitas outras. Para saber mais, <Link onClick={() => window.scrollTo(0,0)} to='/contato'>entre em contato</Link>.
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

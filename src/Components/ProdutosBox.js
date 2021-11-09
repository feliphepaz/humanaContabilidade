import React from 'react';
import './ProdutosBox.css';
import estatua from '../Assets/icon-estatua.png';
import burjAlArab from '../Assets/icon-burj-al-arab.png';
import { Link } from 'react-router-dom';

const ProdutosBox = () => {
    return (
        <section className='produtos-box'>
            <div className='container' data-anime='down'>
                <div className='abrir-empresa'>
                    <img src={estatua} alt=''></img>
                    <h3>Abrir Empresa</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <ul>
                        <li>Processo simplificado</li>
                        <li>Sua empresa aberta em tempo record</li>
                        <li>Suporte total a qualquer momento do dia</li>
                    </ul>
                    <Link to='contato' className='cta'>Fale Conosco</Link>
                </div>
                <div className='migrar-empresa'>
                    <img src={burjAlArab} alt=''></img>
                    <h3>Migrar Empresa</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <ul>
                        <li>Não se preocupe com a burocracia</li>
                        <li>Realizamos a migração de forma rápida</li>
                        <li>Documentação 100% digital</li>
                    </ul>
                    <Link to='contato' className='cta'>Fale Conosco</Link>
                </div>
            </div>
        </section>
    )
}

export default ProdutosBox

import React from 'react';
import './ContatoContent.css';
import { Link } from 'react-router-dom';

const ContatoContent = (props) => {
    return (
        <section className='contact' id={props.id === 'page' ? 'contact-page' : ''}>
            <div className={props.id === 'page' ? 'container animate' : 'container'} data-anime='left'>
                <div className='info'>
                    <h2><span>Pronto para realizar</span>um trabalho conosco?</h2>
                    <p>Entre em contato! Será um prazer poder te ajudar.</p>
                    <ul className='contact-items'>
                        <li className='tel'>
                            <div>
                                <h4>Fale conosco</h4>
                                <Link to=''>(11) 0000-00000</Link>
                            </div>
                        </li>
                        <li className='mail'>
                            <div>
                                <h4>E-mail</h4>
                                <Link to=''>contato@humanacontabil.com.br</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <form className='form'>
                    <div>
                        <input type='text' className='field' id={props.id === 'page' ? 'field-page' : ''} placeholder='Nome Completo'></input>
                        <input type='mail' className='field' id={props.id === 'page' ? 'field-page' : ''} placeholder='E-mail'></input>    
                    </div>
                    <div>
                        <input type='tel' className='field' id={props.id === 'page' ? 'field-page' : ''} placeholder='Telefone'></input>
                        <input type='text' className='field' id={props.id === 'page' ? 'field-page' : ''} placeholder='Empresa'></input>    
                    </div>
                    <input type='text' className='field' id={props.id === 'page' ? 'field-page' : ''} placeholder='Eu preciso de serviços para minha empresa'></input>    
                    <input type='submit' className='submit' value='Enviar formulário'></input>
                </form>
            </div>  
        </section>
    )
}

export default ContatoContent

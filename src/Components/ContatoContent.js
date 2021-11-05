import React from 'react';
import './ContatoContent.css';

const ContatoContent = (props) => {
    console.log(props.id);
    return (
        <section className='contact' id={props.id === 'page' ? 'contact-page' : ''}>
            <div className='container'>
                <div className='info'>
                    <h2><span>Pronto para realizar</span>um trabalho conosco?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <ul className='contact-items'>
                        <li className='tel'>
                            <div>
                                <h4>Fale conosco</h4>
                                <a href='#'>(11) 0000-00000</a>
                            </div>
                        </li>
                        <li className='mail'>
                            <div>
                                <h4>E-mail</h4>
                                <a href='#'>contato@humanacontabil.com.br</a>
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

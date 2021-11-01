import React from 'react';
import './css/contact.css';

const Contact = () => {
    return (
        <section className='contact'>
            <div className='container'>
                <div className='info'>
                    <h2><span>Pronto para realizar</span>um trabalho conosco?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <ul className='contact-items'>
                        <li className='tel'>
                            <div>
                                <h4>Fale conosco</h4>
                                (11) 0000-00000
                            </div>
                        </li>
                        <li className='mail'>
                            <div>
                                <h4>E-mail</h4>
                                contato@humanacontabil.com.br
                            </div>
                        </li>
                    </ul>
                </div>
                <form className='form'>
                    <div>
                        <input type='text' className='field' placeholder='Nome Completo'></input>
                        <input type='mail' className='field' placeholder='E-mail'></input>    
                    </div>
                    <div>
                        <input type='tel' className='field' placeholder='Telefone'></input>
                        <input type='text' className='field' placeholder='Empresa'></input>    
                    </div>
                    <input type='text' className='field' placeholder='Eu preciso de serviços para minha empresa'></input>    
                    <input type='submit' className='submit' value='Enviar formulário'></input>
                </form>
            </div>  
        </section>
    )
}

export default Contact

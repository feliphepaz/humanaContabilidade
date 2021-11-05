import React from 'react'
import './Portal.css';
import googlePlay from './Assets/google-play.png';
import appStore from './Assets/app-store.png';


const Produtos = () => {
    return (
        <section className='portal-do-aluno'>
            <div className='container animate' data-anime='left'>
                <div className='apps-text'>
                    <h2>Mais comodidade <span>para você</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <ul className='apps-icons'>
                    <li className='apps'>
                        <h3>Baixe o aplicativo!</h3>
                        <a href='#'><img src={googlePlay}></img></a>
                        <a href='#'><img src={appStore}></img></a>
                    </li>
                    <li className='web'>
                        <h3>Ou então acesse diretamente pelo seu navegador</h3>
                        <a className='portal'>Acessar</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Produtos

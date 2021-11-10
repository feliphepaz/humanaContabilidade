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
                    <p>Para gerenciar toda a documentação de seus processos, utilizamos a plataforma Meu Contador da NuvTech. Desse jeito, além de economizar papel e cuidar do meio ambiente, você tem mais tranquilidade em acompanhar como anda a situação da sua empresa diretamente do seu smartphone.</p>
                </div>
                <ul className='apps-icons'>
                    <li className='apps'>
                        <h3>Baixe o aplicativo!</h3>
                        <a href='https://play.google.com/store/apps/details?id=br.com.nuvtech.pier.meucontador&hl=pt_BR&gl=US' target='_blank'><img src={googlePlay} alt=''></img></a>
                        <a href='https://apps.apple.com/br/app/meu-contador/id1093957078' target='_blank'><img src={appStore} alt=''></img></a>
                    </li>
                    <li className='web'>
                        <h3>Ou então acesse diretamente pelo seu navegador</h3>
                        <a href='https://app.meucontador.mobi/meu-contador' target='_blank' className='portal'>Acessar</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Produtos

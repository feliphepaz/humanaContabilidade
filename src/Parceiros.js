import React from 'react'
import './Parceiros.css';
import ctech from './Assets/ctech.png';
import rhsc from './Assets/rhsc.png';
import itc from './Assets/itc.png';
import pier from './Assets/pier.png';
import nuvtech from './Assets/nuvtech.png';


const Parceiros = () => {
    return (
        <section className='parceiros-intro'>
            <div className='container'>
                <div className='parceiros-intro-text animate' data-anime='left'>
                    <h2>Nossos clientes são a prova de um trabalho <span>feito com amor</span></h2>
                    <p>Nossa empresa sempre teve como qualidade oferecer aos nossos clientes soluções para agilizar e tornar profissional seus serviços. Por isso contamos com parceiros que mantêm o mesmo método de trabalho de nossa empresa.</p>
                </div>
                <ul className='logos animate' data-anime='right'>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={ctech} alt=''></img>
                        </div>
                        <div>
                            <p>Fundada em 2003, a CTECH é uma empresa de tecnologia especializada no atendimento de micro e pequenas empresas.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={rhsc} alt=''></img>
                        </div>
                        <div>
                            <p>A RHSC é uma empresa que firma parcerias para oferecer serviços de qualidade em todos os processos e rotinas do Departamento Pessoal.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={itc} alt=''></img>
                        </div>
                        <div>
                            <p>O ITC foi fundado em novembro de 1994 com a atividade de comércio de livros, revistas, periódicos e software nas áreas Fiscal, Contábil, Trabalhista e Previdenciária.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={pier} alt=''></img>
                        </div>
                        <div>
                            <p>Com o P.I.E.R. você fica sabendo o custo exato de cada hora trabalhada, de cada serviço prestado e o valor preciso do retorno sobre o investimento, além de aprimorar a gestão do negócio.</p>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={nuvtech} alt=''></img>
                        </div>
                        <div>
                            <p>A NuvTech é uma empresa de tecnologia da informação focada na alta produção de seus clientes desenvolvendo sistemas que automatizam processos.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parceiros

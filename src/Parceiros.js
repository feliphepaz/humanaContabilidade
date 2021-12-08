import React from 'react'
import './Parceiros.css';
import brooklin from './Assets/brooklin.png';
import dape from './Assets/dape.png';
import fpc from './Assets/fpc.png';
import caema from './Assets/caema.png';
import patriciasalmona from './Assets/patriciasalmona.png';
import cepec from './Assets/cepec.png';
import marcia from './Assets/marcia.png';
import daniele from './Assets/daniele.png';
import fprati from './Assets/fprati.png';
import adayr from './Assets/adayr.png';
import patricia from './Assets/patricia.png';
import roberta from './Assets/roberta.png';

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
                            <img className='logo-empresa' src={brooklin} alt=''></img>
                        </div>
                        <div>
                            <p>Em atuação no Brasil há 20 anos, a Brooklin é uma seguradora especializada em seguros de vida e na venda personalizada.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={marcia} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Marcia Bestel</h4>
                                        <span>Diretora da Brooklin</span>
                                    </div>
                                </div>
                                <p>A Humana é uma empresa referência em contabilidade! Não tomamos nenhuma decisão contábil, sem consultar a sócia fundadora.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={dape} alt=''></img>
                        </div>
                        <div>
                            <p>A Dape Capital é uma boutique de investimentos em criptomoedas, pautada em um conceito Private de atendimento e gestão de patrimônio.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={daniele} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Daniele Abdo</h4>
                                        <span>C.E.O da Dape Capital</span>
                                    </div>
                                </div>
                                <p> Sempre fui bem atendida e a cada nova demanda, a Humana vem me atendendo e superando minhas expectativas!</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={fpc} alt=''></img>
                        </div>
                        <div>
                            <p>A F Prati Consulting é uma empresa que oferece serviços de engenharia aos seus clientes, no ramo de consultoria em construções.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={fprati} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Fábio Prati</h4>
                                        <span>Diretor da F Prati Consulting</span>
                                    </div>
                                </div>
                                <p>Nesse setor complexo devido nossa legislação, é difícil encontrar as respostas corretas, e isso eu tenho obtido da Humana, reduzindo minha exposição a riscos e mantendo minha empresa em dia com suas obrigações.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={caema} alt=''></img>
                        </div>
                        <div>
                            <p>A Caema Brasil é uma empresa voltada à consultoria técnica em engenharia de materiais e novas tecnologias.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={adayr} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Adayr Borro Jr</h4>
                                        <span>Diretor da Caema Brasil Consultoria</span>
                                    </div>
                                </div>
                                <p>A Humana é uma excelente empresa de contabilidade. Depois de muitas decepções no mercado, finalmente encontrei uma empresa séria, competente e rápida nas respostas.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={patriciasalmona} alt=''></img>
                        </div>
                        <div>
                            <p>Dra. Patrícia Salmona é médica pediatra e geneticista especializada em Síndrome de Down. Atualmente comanda a Salmona Clínica Médica.</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={patricia} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Dra. Patrícia Salmona</h4>
                                        <span>Diretora da Salmona Clínica Médica</span>
                                    </div>
                                </div>
                                <p>A Humana supre 100% das minhas necessidades e solicitações. Prestam um atendimento com profissionalismo, praticidade, simpatia. Nunca fico sem um retorno rápido. Recomendo.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='logo-box'>
                            <img className='logo-empresa' src={cepec} alt=''></img>
                        </div>
                        <div>
                            <p>A CEPEC-SP é uma clínica de atendimento pediátrico e genético, com foco em Trissomia 21 (Síndrome de Down).</p>
                            <div className='documentario'>
                                <div className='documentario-perfil'>
                                    <div>
                                        <img src={roberta} alt=''></img>
                                    </div>
                                    <div>
                                        <h4>Roberta Mustacchi</h4>
                                        <span>Diretora da CEPEC-SP</span>
                                    </div>
                                </div>
                                <p>A 1 ano assumi a clínica médica de meu pai, quando me deparei com uma desorganização vinda por parte do antigo contador. Recebi a indicação de procurar a Dilma e fui supreendida por um serviço de excelência. Hoje sinto-me segura e satisfeita.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parceiros

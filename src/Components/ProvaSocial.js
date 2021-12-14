import React from 'react';
import './ProvaSocial.css';
import patricia from '../Assets/patricia.png';
import daniele from '../Assets/daniele.png';
import marcia from '../Assets/marcia.png';
import fprati from '../Assets/fprati.png';
import adayr from '../Assets/adayr.png';
import roberta from '../Assets/roberta.png';
import danilo from '../Assets/gaba.png';
import star from '../Assets/star.png';

let n = 0;
function handleDepoNav(e) {
    if (e.target.innerText === '›') {
        n += 1;
    } else if (e.target.innerText === '‹') {
        n -= 1;
    }
    if (n > 3) {
        n = 0;
    } else if (n < 0) {
        n = 3;
    }
    const documentaries = document.querySelectorAll('.documentaries');
    documentaries.forEach((doc) => {
        doc.style.display = 'none';
    });
    documentaries[n].style.display = 'flex';
}

const perfis = [
    {
        id: 1,
        nome: 'Daniele Abdo',
        ocupação: 'C.E.O da Dape Capital',
        foto: daniele,
        avaliação: 5,
        comentario: 'Iniciei meu relacionamento com a Humana em 2014 e desde então nossa parceria vem se solidificando a cada dia. Sempre fui bem atendida e a cada nova demanda, a Humana vem me atendendo e superando minhas expectativas!',
    },
    {
        id: 2,
        nome: 'Dra. Patrícia Salmona',
        ocupação: 'Diretora da Salmona Clínica Médica',
        foto: patricia,
        avaliação: 5,
        comentario: 'A empresa Humana sempre supre 100% das minhas necessidades e solicitações. Prestam um atendimento com profissionalismo, praticidade, simpatia. Nunca fico sem um rápido retorno. Recomendo.',
    },
    {
        id: 3,
        nome: 'Marcia Bestel',
        ocupação: 'Diretora da Brooklin',
        foto: marcia,
        avaliação: 5,
        comentario: 'A Humana é uma empresa referência em contabilidade! Não tomamos nenhuma decisão contábil, sem consultar a sócia fundadora. Sabem ouvir o cliente, entender suas necessidades e, por esta razão, oferecem um serviço personalizado e diferenciado.',
    },
    {
        id: 4,
        nome: 'Fábio Prati',
        ocupação: 'Diretor da F Prati Consulting',
        foto: fprati,
        avaliação: 5,
        comentario: 'Nesse setor complexo devido nossa legislação, é difícil encontrar as respostas corretas, e isso eu tenho obtido da Humana, reduzindo minha exposição a riscos e mantendo minha empresa em dia com suas obrigações.',
    },
    {
        id: 5,
        nome: 'Adayr Barros Jr',
        ocupação: 'Diretor da Caema Brasil Consultoria',
        foto: adayr,
        avaliação: 5,
        comentario: 'A Humana é uma excelente empresa de contabilidade. Depois de muitas decepções no mercado, finalmente encontrei uma empresa séria, competente e rápida nas respostas.',
    },
    {
        id: 6,
        nome: 'Roberta Mustacchi',
        ocupação: 'Diretora da CEPEC-SP',
        foto: roberta,
        avaliação: 5,
        comentario: 'A 1 ano assumi a clínica médica de meu pai, quando me deparei com uma desorganização vinda por parte do antigo contador. Recebi a indicação de procurar a Dilma e fui supreendida por um serviço de excelência. Hoje sinto-me segura e satisfeita.',
    },
    {
        id: 7,
        nome: 'Danilo Gaba',
        ocupação: 'C.E.O da Equilibriumm Consultório Psicológico',
        foto: danilo,
        avaliação: 5,
        comentario: 'Sou grato em ser cliente da Dilma. Confesso ter sido resistente antes do primeiro contato, por sempre ter sido autônomo, mas hoje reconheço ser melhor este formato. Graças a sua paciência e dedicação no apoio das minhas dúvidas e inseguranças.',
    },
]

const ProvaSocial = () => {
    return (
        <>
        <section className='statistics' data-anime='left'>
            <div className='container'>
                <ul className='data'>
                    <li>
                        <span>+1000</span>
                        <p>clientes atendidos</p>
                    </li>
                    <li>
                        <span>+10</span>
                        <p>anos de mercado</p>
                    </li>
                    <li>
                        <span>90%</span>
                        <p>taxa de sucesso</p>                    
                    </li>
                    <li>
                        <span>+1000</span>
                        <p>clientes atendidos</p>                    
                    </li>
                </ul>
            </div>
        </section>

        <section className='social-proof'>
                <div className='container'>
                    <div className='depo-head'>
                        <div className='depo-head-info'>
                            <h3>Clientes Satisfeitos</h3>
                            <p>Veja o que estão falando de nós.</p>
                        </div>
                        <nav className='nav-depo'>
                            <button onClick={handleDepoNav}>‹</button>
                            <button onClick={handleDepoNav}>›</button>
                        </nav>
                </div>
                <ul className='documentaries first-doc' id='0'>
                    {perfis.slice(0, 2).map((per) => (
                        <li key={per.id}>
                            <div className='profile'>
                                <div>
                                    <img src={per.foto} alt=''></img>
                                </div>
                                <div>
                                    <h4>{per.nome}</h4>
                                    <span>{per.ocupação}</span>
                                </div>
                            </div>
                            <p>{per.comentario}</p>
                            <div className='rating'>
                                {[...Array(per.avaliação)].map((item, index) => (
                                    <img key={index} src={star} alt=''></img>
                                ))}
                            </div>
                        </li>
                    ))}
                    </ul>
                <ul className='documentaries' id='1'>
                    {perfis.slice(2, 4).map((per) => (
                        <li key={per.id}>
                            <div className='profile'>
                                <div>
                                    <img src={per.foto} alt=''></img>
                                </div>
                                <div>
                                    <h4>{per.nome}</h4>
                                    <span>{per.ocupação}</span>
                                </div>
                            </div>
                            <p>{per.comentario}</p>
                            <div className='rating'>
                                {[...Array(per.avaliação)].map((item, index) => (
                                    <img key={index} src={star} alt=''></img>
                                ))}
                            </div>
                        </li>
                    ))}
                    </ul>
                <ul className='documentaries' id='2'>
                    {perfis.slice(4, 6).map((per) => (
                        <li key={per.id}>
                            <div className='profile'>
                                <div>
                                    <img src={per.foto} alt=''></img>
                                </div>
                                <div>
                                    <h4>{per.nome}</h4>
                                    <span>{per.ocupação}</span>
                                </div>
                            </div>
                            <p>{per.comentario}</p>
                            <div className='rating'>
                                {[...Array(per.avaliação)].map((item, index) => (
                                    <img key={index} src={star} alt=''></img>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className='documentaries' id='3'>
                    {perfis.slice(6).map((per) => (
                        <li key={per.id}>
                            <div className='profile'>
                                <div>
                                    <img src={per.foto} alt=''></img>
                                </div>
                                <div>
                                    <h4>{per.nome}</h4>
                                    <span>{per.ocupação}</span>
                                </div>
                            </div>
                            <p>{per.comentario}</p>
                            <div className='rating'>
                                {[...Array(per.avaliação)].map((item, index) => (
                                    <img key={index} src={star} alt=''></img>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}

export default ProvaSocial

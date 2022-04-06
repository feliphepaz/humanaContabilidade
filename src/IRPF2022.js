import React from 'react'
import './Noticias.css';

const IRPF2022 = () => {
    return (
        <section className='noticias irpf2022'>
            <div className='container animate' data-anime='left'>
                <div className='noticias-header'>
                    <h2>Tudo sobre o <span>IRPF2022</span></h2>
                </div>
                <div className='irpf2022-content'>
                    <h3>Quem deve declarar o Imposto de Renda 2022?</h3>
                    <p>O imposto de renda funciona como uma tributação federal, anualmente gerenciada pelo RF. Sua prestação é obrigatória para todos aqueles que tenham tido rendimentos tributáveis superiores a R$ 28.559. No entanto, é preciso ficar atento as regras e documentações.</p>

                    <h3>O prazo de entrega da declaração do Imposto de Renda 2022</h3>
                    <p>O Imposto de Renda em 2022, que terá início no próximo dia 7 de março e vai se encerrar dia 31 de maio.</p>

                    <h3>Quem precisa declarar o IRPF em 2022?</h3>
                    <ul>
                        <li>
                            Quem recebeu rendimentos tributáveis acima de R$ 28.559,70;
                        </li>
                        <li>
                            Contribuintes que receberam rendimentos isentos acima de R$ 40.000;
                        </li>
                        <li>
                            Aqueles que tiveram, em qualquer mês do ano a ser declarado, um ganho de capital na venda de bens ou realizaram operações na Bolsa de Valores;
                        </li>
                        <li>
                            Quem optou pela isenção de imposto na venda de um imóvel residencial para comprar outro dentro de 180 dias;
                        </li>
                        <li>
                            Aqueles que, até o último dia do ano a ser declarado, tinham posses somando mais de R$ 300 mil;
                        </li>
                        <li>
                            Pessoas que alcançaram a receita bruta acima de R$ 142.798,50 em atividades rurais;
                        </li>
                        <li>
                            Todos aqueles que passaram a morar no Brasil em qualquer mês do ano a ser declarado;
                        </li>
                        <li>
                            Quem recebeu auxílio emergencial para enfrentamento da pandemia, em qualquer valor, e teve também outros rendimentos tributáveis em valor anual superior a R$ 22.847,76.
                        </li>
                    </ul>

                    <h3>Quais são os documentos obrigatórios?</h3>
                    <ul>
                        <li>
                            Documento de identidade (nome, CPF, data de nascimento e título de eleitor);
                        </li>
                        <li>
                            Endereço completo atualizado;
                        </li>
                        <li>
                            Comprovante da atividade profissional;
                        </li>
                        <li>
                            Dados bancários, para débito ou restituição do imposto;
                        </li>
                        <li>
                            Dependentes (nome, data de nascimento e grau de parentesco).
                        </li>
                    </ul>

                    <h3>Comprovações sobre bens</h3>
                    <ul>
                        <li>
                            Imóveis: Data de aquisição, área do imóvel, IPTU, registro de inscrição no órgão público e registro no cartório de Imóveis;
                        </li>
                        <li>
                            Veículos e aeronaves: Número do Renavam, registro no órgão fiscalizador;
                        </li>
                        <li>
                            Contas correntes e aplicações: CNPJ da instituição financeira, agência e número da conta.
                        </li>
                        <li>
                            Informes de rendimentos de instituições financeiras;
                        </li>
                        <li>
                            Informes de rendimentos de salários, pró-labore, distribuição de lucros, aposentadoria, dentre outros;
                        </li>
                        <li>
                            Informes de rendimentos de aluguéis de bens móveis e imóveis recebidos de pessoas jurídicas;
                        </li>
                        <li>
                            Informações e documentos de outras rendas recebidas no ano, como pensão alimentícia, doações e herança;
                        </li>
                        <li>
                            Resumo mensal do livro caixa com memória de cálculo do carnê leão; DARFs de carnê leão.
                        </li>
                    </ul>

                    <h3>Dados gerais</h3>
                    <ul>
                        <li>
                            Dados da conta bancária para restituição ou débitos das cotas de imposto apurado, caso haja;
                        </li>
                        <li>
                            Nome, CPF, grau de parentesco dos dependentes, data de nascimento e endereço atualizado;
                        </li>
                        <li>
                            Cópia da última declaração de Imposto de Renda Pessoa Física (completa) entregue;
                        </li>
                    </ul>

                    <h3>Principais novidades do imposto deste ano, referente ao ano-exercício de 2021</h3>

                    <h4>Cadastro no Gov.br</h4>
                    <p>Este ano a receita vai limitar o acesso dos contribuintes aos serviços virtuais do Centro de Atendimento Virtual (e-CAC) para quem não tiver nível prata ou ouro no portal “Gov.br”. Isso vale para quem acessa o e-CAC com uma conta “Gov.br”.</p>

                    <h4>Restituição e pagamentos do imposto via PIX</h4>
                    <p>Outra novidade deste ano é a possibilidade de receber a restituição via PIX, o serviço de pagamento do Banco Central. Só será aceita, porém, a chave PIX igual ao CPF do titular da declaração. Também será possível realizar os pagamentos de DARF do Imposto de Renda através desta modalidade.</p>

                    <h4>Dependentes</h4>
                    <p>A Receita realizou uma mudança na ficha da declaração para permitir atualização de cadastro dos dependentes, com inclusão do endereço eletrônico (e-mail), telefone celular, e a informação se vive com o titular.</p>

                    <h4>Bens e Direitos</h4>
                    <p>A tabela de código do tópico foi atualizada e agrupada, e passou a incluir novos campos obrigatórios, como a inclusão do Renavam para declaração de automóveis.</p>

                    <h4>Pagamentos</h4>
                    <p>A Receita excluiu o código 38 “Fundo de Aposentadoria Programada Individual”. Agora, a aplicação deverá ser descrita com o código 36 “Previdência Complementar (inclusive FAPI)”.</p>

                    <h4>Alimentandos</h4>
                    <p>A partir desse ano há a possibilidade de indicar se o alimentante é titular ou dependente da declaração.</p>

                    <h4>DARF de devolução do Auxílio Emergencial</h4>
                    <p>O programa gerador do IR 2022 não emitirá mais a DARF. Os contribuintes devem considerar as instruções do Ministério da Cidadania para realizar o pagamento do benefício.</p>
                </div>
            </div>
        </section>
    )
}

export default IRPF2022

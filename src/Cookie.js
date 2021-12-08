import React from 'react';
import './Cookie.css';

const Cookie = () => {
    const [showContainer, setShowContainer] = React.useState(true);
    const [marketing, setMarketing] = React.useState(false);
    const [analytics, setAnalytics] = React.useState(false);

    React.useEffect(() => {
        if (!window.localStorage.getItem('marketing') && !window.localStorage.getItem('analytics')) {
            getPref();
            setShowContainer(true);
            } else {
            setShowContainer(false);
            if (window.localStorage.getItem('marketing')) {
                getMarketing()
            }
            if (window.localStorage.getItem('analytics')) {
                getAnalytics();
            }
        }
    }, [])


    function getPref() {
        if (marketing) {
            getMarketing()
            window.localStorage.setItem('marketing', 'cookie aceito');
        }
        if (analytics) {
            getAnalytics();
            window.localStorage.setItem('analytics', 'cookie aceito');
        }
        setShowContainer(false);
    }

    function getMarketing() {
        console.log('Função de Marketing');
    }

    function getAnalytics() {
        console.log('Função do Analytics');
    }

    return (
        <div className='cookie-container' style={showContainer ? {display: 'block'} : {display: 'none'}}>
            <div class='cookie'>
                <p>Permito o uso de cookies para:</p>
                <label for="marketing">
                    <input type="checkbox" name='marketing' id="marketing" checked={marketing} onChange={({target}) => setMarketing(target.checked)}/>
                    Marketing
                </label>
                <label for="analytics">
                    <input type="checkbox" name='analytics' id="analytics" checked={analytics} onChange={({target}) => setAnalytics(target.checked)}/>
                    Analytics
                </label>
            </div>
            <button class='cookie-save cta' onClick={getPref}>Salvar e Continuar</button>
            <legend>Não sabe do que se trata? Leia o nosso <a href='https://humanacontabilidade.com.br/privacidade_prover_contabilidade.pdf' target='_blank'>contrato de LGPD</a>.</legend>
        </div>
    )
}

export default Cookie

import React from 'react'
import Banner from './Components/Banner';
import Servicos from './Components/Servicos';
import Beneficios from './Components/Beneficios';
import ProvaSocial from './Components/ProvaSocial';
import ContatoContent from './Components/ContatoContent';

const Home = () => {
    return (
        <>
        <Banner />
        <Servicos />
        <Beneficios />
        <ProvaSocial />
        <ContatoContent />
        </>
    )
}

export default Home

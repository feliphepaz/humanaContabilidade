import React from 'react'
import './Sobre.css';
import boneca1 from '../Assets/boneca_1.png';

const Sobre = () => {
    return (
        <section className='sobre'>
            <div className='container animate' data-anime='left'>
                <div className='sobre-text'>
                    <h2>O que é a <span>Humana</span> <span>Contabilidade?</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='sobre-img'>
                    <img src={boneca1}></img>
                </div>
            </div>
        </section>
    )
}

export default Sobre

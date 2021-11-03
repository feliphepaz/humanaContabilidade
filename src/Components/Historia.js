import React from 'react'
import './Historia.css'
import boneca2 from '../Assets/boneca_3.png'

const Historia = () => {
    return (
        <section className='historia'>
            <div className='container'>
                <div className='historia-img'>
                    <img src={boneca2}></img>
                </div>
                <div className='historia-text'>
                    <h2>O que é a Humana Contabilidade?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </section>
    )
}

export default Historia

import React from 'react'
import './Popup.css';
import { Link } from 'react-router-dom';
import Logo from "../Assets/logo.png"
import PopupImg from '../Assets/popup-img.png';

const Popup = () => {
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setModal(true);
        }, 6000)
    }, []);

    function handleScroll() {
        setModal(false);
        window.scrollTo(0,0)
    }

    return (
    <>
    {modal &&
    <div className='popup'>
        <button onClick={() => setModal(false)}>X</button>
        <h2>Atenção!</h2>
        <div className='pop-container'>
            <div className='pop-div1'>
                <p>Saiba tudo sobre o imposto de renda 2022!</p>
                <Link to="/noticias/irpf2022" onClick={() => handleScroll()} className='cta'>Clique aqui</Link>
            </div>
            <div className='pop-div2'>
                <img src={PopupImg}></img>
            </div>
        </div>
        <img className='logo-pop' src={Logo}></img>
    </div>
    }
    </>
  )
}

export default Popup
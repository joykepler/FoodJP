import React, { useState, useEffect } from 'react';
import './style.css';
import Logo from '../../assets/Logo.svg';
import Button from '../Button';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headerButtonStyle = {
        width: windowWidth <= 767 ? '100px' : '170px',
        fontSize: windowWidth <= 767 ? '15px' : 'initial',
        texto: windowWidth <= 767 ? 'Baixar' : 'Baixar o App',
    };

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
                <a href="#">Início</a>
                <a href="#">Sobre nós</a>
                <a href="#">Populares</a>
            </nav>
            <Button texto={headerButtonStyle.texto} largura={headerButtonStyle.width} altura="50px" fontSize={headerButtonStyle.fontSize}/>
        </header>
    )
}

export default Header;
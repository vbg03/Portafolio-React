// src/components/Header.js
import React from 'react';
/*import './header.css' // Si tienes un archivo de estilos específico*/

const Header = () => (
    <header className="header">
        <a href="#" className="logo">Mi Portafolio</a>

        <i className='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
            <a href="#inicio" className="active">Inicio</a>
            <a href="#sobre">Sobre mi</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
        </nav>
    </header>
);

export default Header;

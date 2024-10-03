// src/components/Header.js
import React from 'react';
/*import './header.css' // Si tienes un archivo de estilos específico*/

const Header = () => (
    <header class="header">
        <a href="#" class="logo">Mi Portafolio</a>

        <i class='bx bx-menu' id='menu-icon'></i>

        <nav class='navbar'>
            <a href="#inicio" class="active">Inicio</a>
            <a href="#sobre">Sobre mi</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#Contacto">Contacto</a>
        </nav>
    </header>
);

export default Header;

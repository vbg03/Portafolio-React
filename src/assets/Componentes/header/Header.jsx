// src/components/Header.js
import React from 'react';
/*import './header.css' // Si tienes un archivo de estilos específico*/

const Header = () => (
    <header className="header">
        <div className="menu container">
            <a href="#" className="logo">Mi Portafolio</a>
            <nav class="navigation">
                <a href="#Inicio" >Inicio</a>
                <a href="#Articulos">Artículos</a>
                <a href="#Prototipos">Prototipos</a>
                <a href="#Galeria">Galería</a>
                <a href="#Acerca de">Acerca de</a>
            </nav>
        </div>
    </header>
);

export default Header;

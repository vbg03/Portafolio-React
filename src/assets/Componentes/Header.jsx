// src/components/Header.js
import React from 'react';
import './App.css' // Si tienes un archivo de estilos específico

const Header = () => (
  <header className="header">
    <div className="menu container">
      <a href="#" className="logo">Mi Portafolio</a>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src="./public/Imagenes/perfil.jpg" className="menu-icono" alt="menu" />
      </label>
      <nav className="barrita">
        <ul>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
        </ul>
      </nav>
    </div>
    <div className="header-content container">
      <h1>Valeria Bowers Gutierrez</h1>
      <p>@itzzval__</p>
      <h2>Sobre mí</h2>
      <p>Soy una estudiante de ingeniería multimedia apasionada por la programación y el diseño...</p>
    </div>
  </header>
);

export default Header;

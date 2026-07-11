import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Cerrar menú al hacer scroll (opcional, parecido a tu lógica anterior)
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className="header">
      <a href="#inicio" className="logo">It's.Val</a>

      <i
        className={`bx ${open ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        aria-label="menu"
        role="button"
        onClick={() => setOpen(o => !o)}
        style={{ cursor: 'pointer' }}
      ></i>

      <nav className={`navbar ${open ? 'active' : ''}`}>
        <a
          href="#inicio"
          className="active"
          onClick={e => handleLinkClick(e, '#inicio')}
        >
          Inicio
        </a>
        <a href="#sobre" onClick={e => handleLinkClick(e, '#sobre')}>
          Sobre mi
        </a>
        <a href="#habilidades" onClick={e => handleLinkClick(e, '#habilidades')}>
          Habilidades
        </a>
        <a href="#proyectos" onClick={e => handleLinkClick(e, '#proyectos')}>
          Proyectos
        </a>
      </nav>

      <button className="btn" onClick={() => handleLinkClick(event, '#cv')}>
        Ver mi CV
      </button>
    </header>
  );
};

export default Header;

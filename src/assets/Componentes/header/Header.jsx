import React, { useEffect, useState } from 'react';
import './Header.css';

const NAVIGATION_SECTION_IDS = ['inicio', 'sobre', 'habilidades', 'proyectos'];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    let animationFrameId = null;

    const updateActiveSection = () => {
      animationFrameId = null;

      const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
      const activationOffset = Math.min(window.innerHeight * 0.25, 180);
      const activationPoint = window.scrollY + headerHeight + activationOffset;
      const sections = NAVIGATION_SECTION_IDS
        .map(id => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      let nextActiveSection = sections[0].id;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= activationPoint) {
          nextActiveSection = section.id;
        }
      });

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 2) {
        nextActiveSection = sections[sections.length - 1].id;
      }

      setActiveSection(current =>
        current === nextActiveSection ? current : nextActiveSection
      );

      const nextHash = `#${nextActiveSection}`;

      if (window.location.hash !== nextHash) {
        window.history.replaceState(window.history.state, '', nextHash);
      }
    };

    const handlePagePositionChange = () => {
      setOpen(false);

      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();

    window.addEventListener('scroll', handlePagePositionChange, { passive: true });
    window.addEventListener('resize', handlePagePositionChange);

    return () => {
      window.removeEventListener('scroll', handlePagePositionChange);
      window.removeEventListener('resize', handlePagePositionChange);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const sectionId = target.slice(1);
    const section = document.querySelector(target);

    if (!section) return;

    const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    setActiveSection(sectionId);

    if (window.location.hash !== target) {
      window.history.pushState(window.history.state, '', target);
    }

    window.scrollTo({
      top: Math.max(0, sectionTop - headerHeight),
      behavior: 'smooth'
    });

    setOpen(false);
  };

  return (
    <header className="header">
      <a
        href="#inicio"
        className="logo"
        aria-label="Ir al inicio"
        onClick={event => handleLinkClick(event, '#inicio')}
      >
        <img src="/Imagenes/logo.png" alt="Val" className="logo-image" />
      </a>


      <nav className={`navbar ${open ? 'active' : ''}`} aria-label="Navegación principal">
        <a
          href="#inicio"
          className={activeSection === 'inicio' ? 'active' : ''}
          aria-current={activeSection === 'inicio' ? 'page' : undefined}
          onClick={event => handleLinkClick(event, '#inicio')}
        >
          Inicio
        </a>
        <a
          href="#sobre"
          className={activeSection === 'sobre' ? 'active' : ''}
          aria-current={activeSection === 'sobre' ? 'page' : undefined}
          onClick={event => handleLinkClick(event, '#sobre')}
        >
          Sobre mí
        </a>
        <a
          href="#habilidades"
          className={activeSection === 'habilidades' ? 'active' : ''}
          aria-current={activeSection === 'habilidades' ? 'page' : undefined}
          onClick={event => handleLinkClick(event, '#habilidades')}
        >
          Habilidades
        </a>
        <a
          href="#proyectos"
          className={activeSection === 'proyectos' ? 'active' : ''}
          aria-current={activeSection === 'proyectos' ? 'page' : undefined}
          onClick={event => handleLinkClick(event, '#proyectos')}
        >
          Proyectos
        </a>
      </nav>

      <div className="header-actions">
        <a className="header-cv-button" href="#cv" aria-label="Ver hoja de vida">
          Ver CV
        </a>

        <div className="header-quick-actions" aria-label="Acciones rápidas">
          <button type="button" className="header-icon-button" aria-label="Cambiar idioma">
            <i className="bx bx-globe"></i>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="menu-button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(current => !current)}
      >
        <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} id="menu-icon"></i>
      </button>
    </header>
  );
};

export default Header;

import React, { useEffect } from 'react';
import Header from "./assets/Componentes/header/Header.jsx";
import './App.css'
import Footer from './assets/Componentes/footer/Footer.jsx';
import Inicio from './assets/Componentes/inicio/Inicio.jsx';
import SobreMi from './assets/Componentes/sobre-mi/SobreMi.jsx';
import Habilidades from './assets/Componentes/habilidades/Habilidades.jsx';
import Proyectos from './assets/Componentes/proyectos/Proyectos.jsx';

// Asegúrate de instalar ScrollReveal y Typed.js con npm
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

function App() {

  useEffect(() => {
    // Código de script.js aquí

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      });

      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.inicio-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.inicio-img, .habilidades-container, .proyectos-box', { origin: 'bottom' });
    ScrollReveal().reveal('.inicio-content h1, .sobre-img', { origin: 'left' });
    ScrollReveal().reveal('.inicio-content p, .sobre-content', { origin: 'right' });

    const typed = new Typed('.multiple-text', {
      strings: ['Estudiante', 'Ingeniera Multimedia'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

  }, []); // Este array vacío asegura que se ejecute solo una vez al cargar el componente

  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;

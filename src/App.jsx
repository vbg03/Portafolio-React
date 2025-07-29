import React, { useEffect } from 'react';
import Header from "./assets/Componentes/header/Header.jsx";
import './App.css'
import Footer from './assets/Componentes/footer/Footer.jsx';
import Inicio from './assets/Componentes/inicio/Inicio.jsx';
import SobreMi from './assets/Componentes/sobre-mi/SobreMi.jsx';
import Habilidades from './assets/Componentes/habilidades/Habilidades.jsx';
import Proyectos from './assets/Componentes/proyectos/Proyectos.jsx';

// GSAP imports (reemplaza ScrollReveal y Typed)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useEffect(() => {
    // Configuración del menú móvil (mantener)
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
    }

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    const updateActiveNav = () => {
      let current = '';
      sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 150;
        const sectionHeight = sec.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = sec.getAttribute('id');
        }
      });

      navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    };

    // Usar GSAP ScrollTrigger para mejor performance
    ScrollTrigger.addEventListener('refresh', updateActiveNav);
    window.addEventListener('scroll', updateActiveNav);

    // 1. Animación inicial de carga
    const masterTimeline = gsap.timeline();

    // Header sticky con animación suave
    ScrollTrigger.create({
      start: 'top -100',
      end: 'max',
      onUpdate: self => {
        const header = document.querySelector('header');
        if (self.direction === -1) {
          gsap.to(header, { duration: 0.3, y: 0, ease: 'power2.out' });
        } else {
          gsap.to(header, { duration: 0.3, y: -100, ease: 'power2.out' });
        }
      }
    });

    // 2. Animaciones de scroll para cada sección
    gsap.fromTo('.inicio-content',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.inicio',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.inicio-img',
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.inicio',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sobre-img',
      { x: -100, opacity: 0, rotation: -5 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sobre',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sobre-content',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sobre',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Habilidades con stagger effect
    gsap.fromTo('.habilidades-box',
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.habilidades-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Proyectos con efecto cascada
    gsap.fromTo('.proyectos-box',
      { y: 80, opacity: 0, rotationY: 45 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proyectos-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Texto animado profesional (reemplaza Typed.js)
    const multipleTextElement = document.querySelector('.multiple-text');
    if (multipleTextElement) {
      const texts = ['profesional', 'Ingeniera Multimedia'];
      let currentText = 0;

      const animateText = () => {
        gsap.to(multipleTextElement, {
          duration: 0.5,
          text: texts[currentText],
          ease: 'none',
          onComplete: () => {
            setTimeout(() => {
              currentText = (currentText + 1) % texts.length;
              animateText();
            }, 2000);
          }
        });
      };

      animateText();
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('*');
    };

  }, []); // <- Esta llave y corchete faltaban

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
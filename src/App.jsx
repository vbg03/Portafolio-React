import React, { useEffect } from 'react';
import Header from "./assets/Componentes/header/Header.jsx";
import './App.css'
import Footer from './assets/Componentes/footer/Footer.jsx';
import Inicio from './assets/Componentes/inicio/Inicio.jsx';
import SobreMi from './assets/Componentes/sobre-mi/SobreMi.jsx';
import Habilidades from './assets/Componentes/habilidades/Habilidades.jsx';
import Proyectos from './assets/Componentes/proyectos/Proyectos.jsx';
import ParticlesEffect from './assets/Componentes/effects/ParticlesEffect.jsx';
import InteractiveBackground from './assets/Componentes/effects/InteractiveBackground.jsx';
// LÍNEA ELIMINADA: import useScrollAnimations from './assets/hooks/useScrollAnimations.js';

// GSAP imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useEffect(() => {
    // Funciones de scroll animations integradas directamente
    const triggerRipple = (element, x, y) => {
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 107, 53, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = x - 10 + 'px';
      ripple.style.top = y - 10 + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.pointerEvents = 'none';
      
      element.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    };

    const addGlowEffect = (element) => {
      element.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5)';
      element.style.transition = 'box-shadow 0.3s ease';
      
      setTimeout(() => {
        element.style.boxShadow = 'none';
      }, 300);
    };

    // ============= CONFIGURACIÓN INICIAL =============
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
    }

    // ============= NAVEGACIÓN ACTIVA MEJORADA =============
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

          // Efecto de pulso en navegación activa
          gsap.fromTo(link,
            { scale: 1 },
            { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 }
          );
        }
      });
    };

    ScrollTrigger.addEventListener('refresh', updateActiveNav);
    window.addEventListener('scroll', updateActiveNav);

    // ============= HEADER DINÁMICO MEJORADO =============
    ScrollTrigger.create({
      start: 'top -100',
      end: 'max',
      onUpdate: self => {
        const header = document.querySelector('header');
        if (self.direction === -1) {
          gsap.to(header, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out',
            backdropFilter: 'blur(20px)',
            background: 'rgba(10, 10, 10, 0.98)'
          });
        } else {
          gsap.to(header, {
            duration: 0.3,
            y: -100,
            ease: 'power2.out'
          });
        }
      }
    });

    // ============= ANIMACIONES DE ENTRADA MEJORADAS =============

    // Timeline maestro para coordinar animaciones
    const masterTimeline = gsap.timeline();

    // Animación de carga inicial
    masterTimeline
      .fromTo('.header',
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.logo',
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      );

    // Sección Inicio - Efecto de revelado épico
    gsap.fromTo('.inicio-content',
      { y: 100, opacity: 0, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
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
      { x: 100, opacity: 0, scale: 0.5, rotation: 20 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.8,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.inicio',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Redes sociales con stagger mejorado
    gsap.fromTo('.social-media a',
      { y: 50, opacity: 0, scale: 0 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.social-media',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Sección Sobre - Efecto de revelado 3D
    gsap.fromTo('.sobre-img',
      { x: -150, opacity: 0, rotationY: -45, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sobre',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sobre-content',
      { x: 150, opacity: 0, rotationY: 45 },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sobre',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Habilidades con efecto de cascada 3D
    gsap.fromTo('.habilidades-box',
      { y: 100, opacity: 0, scale: 0.5, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: {
          amount: 0.8,
          from: "start"
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.habilidades-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Proyectos con efecto de matriz
    gsap.fromTo('.proyectos-box',
      { y: 120, opacity: 0, rotationX: 60, scale: 0.3 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1.4,
        stagger: {
          amount: 1.2,
          grid: [3, 3],
          from: "center"
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proyectos-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // ============= TEXTO ANIMADO PROFESIONAL =============
    const multipleTextElement = document.querySelector('.multiple-text');
    if (multipleTextElement) {
      const texts = ['profesional', 'Ingeniera Multimedia', 'Desarrolladora', 'Diseñadora UX/UI'];
      let currentText = 0;

      const animateText = () => {
        // Efecto de desvanecimiento hacia afuera
        gsap.to(multipleTextElement, {
          duration: 0.3,
          opacity: 0,
          scale: 0.8,
          ease: 'power2.in',
          onComplete: () => {
            // Cambiar texto
            multipleTextElement.textContent = texts[currentText];

            // Efecto de aparición
            gsap.fromTo(multipleTextElement,
              { opacity: 0, scale: 0.8, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: 'back.out(1.7)',
                onComplete: () => {
                  setTimeout(() => {
                    currentText = (currentText + 1) % texts.length;
                    animateText();
                  }, 2500);
                }
              }
            );
          }
        });
      };

      // Iniciar animación después de un delay
      setTimeout(() => animateText(), 1000);
    }

    // ============= EFECTOS DE SCROLL PARALLAX =============
    ScrollTrigger.batch('.habilidades-box, .proyectos-box', {
      onEnter: elements => {
        gsap.fromTo(elements,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.out' }
        );
      },
      onLeave: elements => {
        gsap.to(elements, { opacity: 0.3, duration: 0.5 });
      },
      onEnterBack: elements => {
        gsap.to(elements, { opacity: 1, duration: 0.5 });
      }
    });

    // ============= EFECTOS DE HOVER MEJORADOS =============

    // Hover para botones con micro-animaciones
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });

        // Efecto de partículas en hover
        createButtonParticles(btn);
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Hover para cards con efecto 3D
    document.querySelectorAll('.habilidades-box, .proyectos-box').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          rotationX: 5,
          rotationY: 5,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    // ============= FUNCIONES AUXILIARES =============

    // Crear partículas en botones
    const createButtonParticles = (button) => {
      const rect = button.getBoundingClientRect();
      const particleCount = 8;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ff6b35';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';

        document.body.appendChild(particle);

        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        gsap.to(particle, {
          x: x,
          y: y,
          opacity: 0,
          scale: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            document.body.removeChild(particle);
          }
        });
      }
    };

    // ============= EFECTOS DE CARGA =============

    // Crear loader personalizado
    const createLoader = () => {
      const loader = document.createElement('div');
      loader.className = 'page-loader';
      loader.innerHTML = `
        <div class="loading-bars">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
        <p style="color: #ff6b35; margin-top: 20px; font-size: 1.2rem;">Cargando experiencia...</p>
      `;

      loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10000;
      `;

      document.body.appendChild(loader);

      // Ocultar loader después de que todo esté cargado
      window.addEventListener('load', () => {
        setTimeout(() => {
          gsap.to(loader, {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              document.body.removeChild(loader);
            }
          });
        }, 500);
      });
    };

    // Solo mostrar loader si no se ha mostrado antes
    if (!sessionStorage.getItem('loaderShown')) {
      createLoader();
      sessionStorage.setItem('loaderShown', 'true');
    }

    // ============= EFECTOS DE SCROLL SUAVE =============

    // Mejorar el scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          // Crear efecto de zoom out/in durante el scroll
          gsap.to('body', {
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });

              gsap.to('body', {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });
        }
      });
    });

    // ============= EFECTOS DE RESIZE =============

    const handleResize = () => {
      ScrollTrigger.refresh();

      // Recrear efectos dependientes del tamaño de ventana
      if (window.innerWidth <= 768) {
        // Desactivar algunos efectos en móvil
        gsap.set('.particles-container', { display: 'none' });
        gsap.set('.custom-cursor', { display: 'none' });
      } else {
        gsap.set('.particles-container', { display: 'block' });
        gsap.set('.custom-cursor', { display: 'block' });
      }
    };

    window.addEventListener('resize', handleResize);

    // ============= CLEANUP =============
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('*');
      window.removeEventListener('resize', handleResize);

      // Limpiar event listeners de hover
      document.querySelectorAll('.btn, .habilidades-box, .proyectos-box').forEach(el => {
        el.removeEventListener('mouseenter', () => { });
        el.removeEventListener('mouseleave', () => { });
      });
    };

  }, []);

  return (
    <div className="App">
      {/* Efectos de partículas y cursor */}
      <InteractiveBackground />
      <ParticlesEffect />

      {/* Componentes principales */}
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
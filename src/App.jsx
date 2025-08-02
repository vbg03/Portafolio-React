import React, { useEffect } from 'react';
import Header from "./assets/Componentes/header/Header.jsx";
import './App.css'
import Footer from './assets/Componentes/footer/Footer.jsx';
import Inicio from './assets/Componentes/inicio/Inicio.jsx';
import SobreMi from './assets/Componentes/sobre-mi/SobreMi.jsx';
import Habilidades from './assets/Componentes/habilidades/Habilidades.jsx';
import Proyectos from './assets/Componentes/proyectos/Proyectos.jsx';
import ParticlesEffect from './assets/Componentes/effects/ParticlesEffect.jsx';

// GSAP imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useEffect(() => {
    // ============= CONFIGURACIÓN INICIAL =============
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
      const handleMenuClick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
      menuIcon.addEventListener('click', handleMenuClick);
    }

    // ============= NAVEGACIÓN ACTIVA =============
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');

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
        if (current && link.getAttribute('href').includes(current)) {
          link.classList.add('active');

          // Efecto de pulso en navegación activa
          gsap.fromTo(link,
            { scale: 1 },
            { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 }
          );
        }
      });
    };

    window.addEventListener('scroll', updateActiveNav);

    // ============= HEADER SCROLL BEHAVIOR =============
    const initializeHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        gsap.set(header, {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 100,
          y: 0,
          opacity: 1
        });
      }
    };

    initializeHeader();

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -50',
      end: 'bottom bottom',
      onUpdate: self => {
        const header = document.querySelector('header');
        if (!header) return;

        if (self.direction === 1 && self.progress > 0.01) {
          // Scrolling down
          gsap.to(header, {
            duration: 0.3,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            backdropFilter: 'blur(20px)',
            background: 'rgba(10, 10, 10, 0.98)',
            boxShadow: '0 2px 30px rgba(0, 0, 0, 0.5)'
          });
        } else {
          // Scrolling up or at top
          gsap.to(header, {
            duration: 0.3,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            backdropFilter: 'blur(10px)',
            background: 'rgba(10, 10, 10, 0.95)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
          });
        }
      }
    });

    // ============= ANIMACIONES DE ENTRADA =============
    const masterTimeline = gsap.timeline();

    // Header animation
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
      { x: 100, opacity: 0, scale: 0.5 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'elastic.out(1, 0.5)',
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

    // === HABILIDADES (técnicas + blandas) ===
    const habilidadesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.habilidades',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Títulos de sección
    habilidadesTimeline.fromTo(
      '.habilidades .section-title',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.3 }
    );

    // Tarjetas técnicas
    habilidadesTimeline.fromTo(
      '.gsap-habilidad-card',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: { amount: 0.8, from: 'start' }
      },
      '-=0.4'
    );

    // Ícono, título, tags y descripción dentro de cada card técnica
    habilidadesTimeline.fromTo(
      '.gsap-habilidad-icon',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.7'
    );
    habilidadesTimeline.fromTo(
      '.gsap-titulo',
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.6'
    );
    habilidadesTimeline.fromTo(
      '.gsap-tech-tag',
      { y: 20, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.4)',
        stagger: 0.1
      },
      '-=0.5'
    );
    habilidadesTimeline.fromTo(
      '.gsap-descripcion',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );

    // Habilidades blandas
    habilidadesTimeline.fromTo(
      '.gsap-habilidad-blanda',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: { amount: 0.8, from: 'start' }
      },
      '-=0.5'
    );
    habilidadesTimeline.fromTo(
      '.gsap-blanda-icon',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.8'
    );
    habilidadesTimeline.fromTo(
      '.gsap-blanda-content',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.6'
    );
    habilidadesTimeline.fromTo(
      '.gsap-icon',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.1 },
      '-=0.6'
    );



    // 1. Animación de entrada para las tarjetas de proyecto
    gsap.fromTo('.proyecto-card',
      {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotationX: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: {
          amount: 1,
          from: "start"
        },
        scrollTrigger: {
          trigger: '.proyectos-container-mejorado',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 2. Animación para los títulos de proyecto
    gsap.fromTo('.proyecto-titulo',
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.proyectos-container-mejorado',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 3. Animación para las descripciones
    gsap.fromTo('.proyecto-descripcion',
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.proyectos-container-mejorado',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 4. Animación para los badges de tecnología
    gsap.fromTo('.tech-badge',
      {
        scale: 0.6,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
        stagger: {
          amount: 0.6,
          from: "start"
        },
        delay: 0.7,
        scrollTrigger: {
          trigger: '.proyectos-container-mejorado',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 5. Animación para los botones de acción
    gsap.fromTo('.proyecto-acciones .proyecto-link',
      {
        y: 15,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: {
          amount: 0.3,
          from: "start"
        },
        delay: 0.9,
        scrollTrigger: {
          trigger: '.proyectos-container-mejorado',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 6. Animación del subtítulo de proyectos
    gsap.fromTo('.proyectos-subtitle',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.proyectos',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 7. Efectos de hover mejorados para las tarjetas de proyecto
    document.querySelectorAll('.proyecto-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out'
        });

        // Animar el overlay
        const overlay = card.querySelector('.proyecto-overlay');
        gsap.to(overlay, {
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });

        // Efecto en los badges de tecnología
        const badges = card.querySelectorAll('.tech-badge');
        gsap.to(badges, {
          scale: 1.05,
          duration: 0.2,
          stagger: 0.05,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });

        const overlay = card.querySelector('.proyecto-overlay');
        gsap.to(overlay, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

        const badges = card.querySelectorAll('.tech-badge');
        gsap.to(badges, {
          scale: 1,
          duration: 0.2,
          stagger: 0.05,
          ease: 'power2.out'
        });
      });
    });

    // 8. Animación para el modal cuando se abre
    const animateModalOpen = (modal) => {
      gsap.fromTo(modal,
        {
          scale: 0.8,
          opacity: 0,
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'back.out(1.7)'
        }
      );

      // Animar contenido del modal
      const modalContent = modal.querySelector('.modal-info');
      gsap.fromTo(modalContent.children,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power2.out'
        }
      );
    };

    // 9. Parallax sutil para las imágenes de proyecto
    gsap.utils.toArray('.proyecto-media').forEach(media => {
      gsap.to(media, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: media,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // 10. Efecto de revelado progresivo en scroll
    ScrollTrigger.batch('.proyecto-card', {
      onEnter: elements => {
        gsap.fromTo(elements,
          {
            opacity: 0,
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
          }
        );
      },
      onLeave: elements => {
        gsap.to(elements, {
          opacity: 0.7,
          scale: 0.98,
          duration: 0.3
        });
      },
      onEnterBack: elements => {
        gsap.to(elements, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        });
      }
    });

    // 11. Animación de contador para badges de tecnología
    const animateTechBadges = () => {
      gsap.utils.toArray('.tech-badge').forEach((badge, i) => {
        ScrollTrigger.create({
          trigger: badge,
          start: 'top 90%',
          onEnter: () => {
            gsap.fromTo(badge,
              {
                scale: 0,
                rotation: -180,
                opacity: 0
              },
              {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'back.out(1.7)'
              }
            );
          }
        });
      });
    };

    // Ejecutar animación de badges
    animateTechBadges();

    // 12. Efecto magnético en botones
    document.querySelectorAll('.proyecto-link').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });

    // Exportar función para animar modal (usar en el componente)
    window.animateModalOpen = animateModalOpen;

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

    // ============= SCROLL SUAVE =============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Cerrar menú móvil si está abierto
          if (navbar && menuIcon) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
          }
        }
      };

      anchor.addEventListener('click', handleClick);
    });

    // ============= RESIZE HANDLER =============
    const handleResize = () => {
      ScrollTrigger.refresh();
      initializeHeader();

      if (window.innerWidth <= 768) {
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
          gsap.set(particlesContainer, { display: 'none' });
        }
      } else {
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
          gsap.set(particlesContainer, { display: 'block' });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // ============= LOADER =============
    const createLoader = () => {
      if (sessionStorage.getItem('loaderShown')) return;

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

      window.addEventListener('load', () => {
        setTimeout(() => {
          gsap.to(loader, {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              if (document.body.contains(loader)) {
                document.body.removeChild(loader);
              }
            }
          });
        }, 500);
      });

      sessionStorage.setItem('loaderShown', 'true');
    };

    createLoader();

    // ============= CLEANUP =============
    return () => {
      // Limpiar ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Limpiar tweens
      gsap.killTweensOf('*');

      // Remover event listeners
      window.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('resize', handleResize);

      if (menuIcon) {
        menuIcon.removeEventListener('click', () => { });
      }

      // Limpiar event listeners de elementos que pueden no existir
      document.querySelectorAll('.btn, .habilidad-card, .proyecto-card').forEach(el => {
        el.replaceWith(el.cloneNode(true)); // alternativa segura para limpiar listeners si quieres evitar mantener referencias vacías
      });


      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => { });
      });
    };

  }, []);

  return (
    <div className="App">
      <ParticlesEffect />
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
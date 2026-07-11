import React, { useEffect } from 'react';
import './App.css'
import Header from "./assets/Componentes/header/Header.jsx";
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
            background: 'rgba(11, 6, 19, 0.98)',
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
            background: 'rgba(11, 6, 19, 0.95)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
          });
        }
      }
    });

    // ============= ANIMACIONES DE ENTRADA =============
    const masterTimeline = gsap.timeline();

    // Header animation
    const headerEl = document.querySelector('.header');
    const logoEl = document.querySelector('.logo');
    
    if (headerEl) {
      masterTimeline.fromTo(headerEl,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
    
    if (logoEl) {
      masterTimeline.fromTo(logoEl,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      );
    }

    // Sección Inicio - Efecto de revelado épico
    const inicioContent = document.querySelector('.inicio-content');
    const inicioImg = document.querySelector('.inicio-img');
    
    if (inicioContent) {
      gsap.fromTo(inicioContent,
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
    }

    if (inicioImg) {
      gsap.fromTo(inicioImg,
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
    }

    // Redes sociales con stagger mejorado
    const socialMedia = document.querySelectorAll('.social-media a');
    if (socialMedia.length > 0) {
      gsap.fromTo(socialMedia,
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
    }

    // Sección Sobre - Efecto de revelado 3D
    const sobreImg = document.querySelector('.sobre-img');
    const sobreContent = document.querySelector('.sobre-content');
    
    if (sobreImg) {
      gsap.fromTo(sobreImg,
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
    }

    if (sobreContent) {
      gsap.fromTo(sobreContent,
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
    }

    // === HABILIDADES OPTIMIZADAS - MÁS RÁPIDAS ===
    const habilidadesSection = document.querySelector('.habilidades');
    if (habilidadesSection) {
      const habilidadesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.habilidades',
          start: 'top 85%', // Trigger un poco más tarde
          toggleActions: 'play none none reverse'
        }
      });

      // Títulos de sección - MÁS RÁPIDO
      const sectionTitles = document.querySelectorAll('.habilidades .section-title');
      if (sectionTitles.length > 0) {
        habilidadesTimeline.fromTo(sectionTitles,
          { x: -30, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.5, // Reducido de 0.8 a 0.5
            ease: 'power2.out', 
            stagger: 0.15 // Reducido de 0.3 a 0.15
          }
        );
      }

      // Tarjetas técnicas - MÁS RÁPIDO Y SIMULTÁNEO
      const habilidadCards = document.querySelectorAll('.gsap-habilidad-card');
      if (habilidadCards.length > 0) {
        habilidadesTimeline.fromTo(habilidadCards,
          { y: 40, opacity: 0, scale: 0.95 }, // Reducido movimiento Y de 60 a 40
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6, // Reducido de 1 a 0.6
            ease: 'power2.out', // Cambiado a ease más rápido
            stagger: { amount: 0.4, from: 'start' } // Reducido de 0.8 a 0.4
          },
          '-=0.2' // Menos delay
        );
      }

      // Íconos, títulos, tags y descripciones - TODO EN PARALELO
      const habilidadIcons = document.querySelectorAll('.gsap-habilidad-icon');
      const titulos = document.querySelectorAll('.gsap-titulo');
      const techTags = document.querySelectorAll('.gsap-tech-tag');
      const descripciones = document.querySelectorAll('.gsap-descripcion');

      // Íconos - MÁS RÁPIDO
      if (habilidadIcons.length > 0) {
        habilidadesTimeline.fromTo(habilidadIcons,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.4, // Reducido de 0.6 a 0.4
            ease: 'back.out(1.4)' // Menos bouncy
          },
          '-=0.5' // Más overlap
        );
      }

      // Títulos - MÁS RÁPIDO
      if (titulos.length > 0) {
        habilidadesTimeline.fromTo(titulos,
          { x: -15, opacity: 0 }, // Reducido movimiento de -20 a -15
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.3, // Reducido de 0.5 a 0.3
            ease: 'power2.out' 
          },
          '-=0.4' // Más overlap
        );
      }

      // Tech tags - MÁS RÁPIDO Y STAGGER REDUCIDO
      if (techTags.length > 0) {
        habilidadesTimeline.fromTo(techTags,
          { y: 10, opacity: 0, scale: 0.9 }, // Menos movimiento
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.3, // Reducido de 0.5 a 0.3
            ease: 'back.out(1.2)', // Menos bouncy
            stagger: 0.05 // Reducido de 0.1 a 0.05
          },
          '-=0.3' // Más overlap
        );
      }

      // Descripciones - MÁS RÁPIDO
      if (descripciones.length > 0) {
        habilidadesTimeline.fromTo(descripciones,
          { y: 10, opacity: 0 }, // Reducido de 15 a 10
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.4, // Reducido de 0.6 a 0.4
            ease: 'power2.out' 
          },
          '-=0.3' // Más overlap
        );
      }

      // Habilidades blandas - MÁS RÁPIDO
      const habilidadesBlandas = document.querySelectorAll('.gsap-habilidad-blanda');
      if (habilidadesBlandas.length > 0) {
        habilidadesTimeline.fromTo(habilidadesBlandas,
          { scale: 0.95, opacity: 0 }, // Menos scale change
          {
            scale: 1,
            opacity: 1,
            duration: 0.6, // Reducido de 1 a 0.6
            ease: 'power2.out', // Ease más rápido
            stagger: { amount: 0.4, from: 'start' } // Reducido de 0.8 a 0.4
          },
          '-=0.2' // Menos delay
        );
      }

      // Íconos de habilidades blandas - MÁS RÁPIDO
      const blandaIcons = document.querySelectorAll('.gsap-blanda-icon');
      if (blandaIcons.length > 0) {
        habilidadesTimeline.fromTo(blandaIcons,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.3, // Reducido de 0.5 a 0.3
            ease: 'back.out(1.4)' 
          },
          '-=0.5' // Más overlap
        );
      }

      // Contenido de habilidades blandas - MÁS RÁPIDO
      const blandaContent = document.querySelectorAll('.gsap-blanda-content');
      if (blandaContent.length > 0) {
        habilidadesTimeline.fromTo(blandaContent,
          { y: 15, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.4, // Reducido de 0.6 a 0.4
            ease: 'power2.out' 
          },
          '-=0.4' // Más overlap
        );
      }

      // Íconos generales - MÁS RÁPIDO
      const icons = document.querySelectorAll('.gsap-icon');
      if (icons.length > 0) {
        habilidadesTimeline.fromTo(icons,
          { scale: 0.7, opacity: 0 }, // Menos scale change
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.3, // Reducido de 0.5 a 0.3
            ease: 'back.out(1.4)', 
            stagger: 0.05 // Reducido de 0.1 a 0.05
          },
          '-=0.4' // Más overlap
        );
      }
    }

    // === PROYECTOS ===
    const proyectosContainer = document.querySelector('.proyectos-container-mejorado');
    if (proyectosContainer) {
      // 1. Animación de entrada para las tarjetas de proyecto
      const proyectoCards = document.querySelectorAll('.proyecto-card');
      if (proyectoCards.length > 0) {
        gsap.fromTo(proyectoCards,
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
      }

      // 2. Animación para los títulos de proyecto
      const proyectoTitulos = document.querySelectorAll('.proyecto-titulo');
      if (proyectoTitulos.length > 0) {
        gsap.fromTo(proyectoTitulos,
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
      }

      // 3. Animación para las descripciones
      const proyectoDescripciones = document.querySelectorAll('.proyecto-descripcion');
      if (proyectoDescripciones.length > 0) {
        gsap.fromTo(proyectoDescripciones,
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
      }

      // 4. Animación para los badges de tecnología
      const techBadges = document.querySelectorAll('.tech-badge');
      if (techBadges.length > 0) {
        gsap.fromTo(techBadges,
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
      }

      // 5. Animación para los botones de acción
      const proyectoLinks = document.querySelectorAll('.proyecto-acciones .proyecto-link');
      if (proyectoLinks.length > 0) {
        gsap.fromTo(proyectoLinks,
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
      }

      // 6. Animación del subtítulo de proyectos
      const proyectosSubtitle = document.querySelector('.proyectos-subtitle');
      if (proyectosSubtitle) {
        gsap.fromTo(proyectosSubtitle,
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
      }

      // 7. Efectos de hover mejorados para las tarjetas de proyecto (CORREGIDO)
      proyectoCards.forEach(card => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              scale: 1.02,
              duration: 0.4,
              ease: 'power2.out'
            });

            // Animar el overlay
            const overlay = card.querySelector('.proyecto-overlay, .proyecto-overlay-fixed');
            if (overlay) {
              gsap.to(overlay, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
              });
            }

            // Efecto en los badges de tecnología
            const badges = card.querySelectorAll('.tech-badge');
            if (badges.length > 0) {
              gsap.to(badges, {
                scale: 1.05,
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.out'
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            });

            const overlay = card.querySelector('.proyecto-overlay, .proyecto-overlay-fixed');
            if (overlay) {
              gsap.to(overlay, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
              });
            }

            const badges = card.querySelectorAll('.tech-badge');
            if (badges.length > 0) {
              gsap.to(badges, {
                scale: 1,
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.out'
              });
            }
          });
        }
      });

      // 9. Parallax sutil para las imágenes de proyecto
      const proyectoMedias = document.querySelectorAll('.proyecto-media');
      proyectoMedias.forEach(media => {
        if (media) {
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
        }
      });

      // 10. Efecto de revelado progresivo en scroll (CORREGIDO)
      if (proyectoCards.length > 0) {
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
      }

      // 12. Efecto magnético en botones (CORREGIDO)
      proyectoLinks.forEach(btn => {
        if (btn) {
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
        }
      });
    }

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
        <p style="color: #a855f7; margin-top: 20px; font-size: 1.2rem;">Cargando experiencia...</p>
      `;

      loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0b0613;
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

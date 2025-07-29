import React, { useEffect, useRef } from 'react';

const ParticlesEffect = () => {
  const particlesRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en desktop para mejor rendimiento
    if (window.innerWidth <= 768) return;

    // ============= CREAR CONTENEDOR DE PARTÍCULAS =============
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);
    particlesRef.current = particlesContainer;

    // ============= SISTEMA DE PARTÍCULAS =============
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Propiedades aleatorias
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 6 + 8;
      const opacity = Math.random() * 0.3 + 0.1;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: #ff6b35;
        border-radius: 50%;
        left: ${startX}px;
        top: 100vh;
        opacity: ${opacity};
        animation: floatUp ${duration}s linear forwards;
      `;
      
      // Agregar brillo ocasional
      if (Math.random() > 0.7) {
        particle.style.boxShadow = `0 0 ${size * 2}px rgba(255, 107, 53, 0.5)`;
      }
      
      particlesRef.current.appendChild(particle);
      
      // Remover partícula después de la animación
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    // ============= CREAR CURSOR PERSONALIZADO =============
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #ff6b35, #ff8c42);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      box-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
    `;
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // ============= ACTUALIZAR CURSOR =============
    const updateCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)';
        cursorRef.current.style.background = '#ff5722';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.background = 'linear-gradient(45deg, #ff6b35, #ff8c42)';
      }
    };

    // ============= EVENT LISTENERS =============
    document.addEventListener('mousemove', updateCursor);
    
    // Agregar listeners a elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // ============= CREAR PARTÍCULAS INICIALES =============
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Crear nuevas partículas periódicamente
    const particleInterval = setInterval(createParticle, 1000);

    // ============= AGREGAR ESTILOS CSS =============
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.3;
        }
        90% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      .custom-cursor::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(255, 107, 53, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: cursorPulse 2s infinite;
      }
      
      @keyframes cursorPulse {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
      }
      
      /* Ocultar cursor por defecto */
      * { cursor: none !important; }
      a, button, .btn { cursor: pointer !important; }
    `;
    document.head.appendChild(style);

    // ============= CLEANUP =============
    return () => {
      clearInterval(particleInterval);
      document.removeEventListener('mousemove', updateCursor);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      if (particlesContainer && particlesContainer.parentNode) {
        particlesContainer.parentNode.removeChild(particlesContainer);
      }
      
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default ParticlesEffect;
import React, { useEffect, useRef } from 'react';
import './ParticlesEffect.css';

const ParticlesEffect = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en desktop para mejor rendimiento
    if (window.innerWidth <= 768) return;

    // ============= CREAR CONTENEDOR DE PARTÍCULAS =============
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
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
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        opacity: ${opacity};
        animation-duration: ${duration}s;
      `;
      
      // Agregar brillo ocasional
      if (Math.random() > 0.7) {
        particle.style.boxShadow = `0 0 ${size * 2}px rgba(168, 85, 247, 0.5)`;
      }
      
      particlesRef.current.appendChild(particle);
      
      // Remover partícula después de la animación
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    // ============= CREAR PARTÍCULAS INICIALES =============
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Crear nuevas partículas periódicamente
    const particleInterval = setInterval(createParticle, 1000);

    // ============= AGREGAR ESTILOS CSS SOLO PARA PARTÍCULAS =============
    // ============= CLEANUP =============
    return () => {
      clearInterval(particleInterval);
      
      if (particlesContainer && particlesContainer.parentNode) {
        particlesContainer.parentNode.removeChild(particlesContainer);
      }
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default ParticlesEffect;

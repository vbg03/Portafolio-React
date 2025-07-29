import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en desktop para mejor rendimiento
    if (window.innerWidth <= 768) return;

    // ============= CREAR CANVAS =============
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);
    canvasRef.current = canvas;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configurar canvas
    canvas.width = width;
    canvas.height = height;

    // ============= SISTEMA DE ONDAS DE FONDO =============
    const drawBackground = () => {
      const time = Date.now() * 0.001;
      
      // Limpiar canvas
      ctx.clearRect(0, 0, width, height);
      
      // Gradiente base
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a1a1a');
      gradient.addColorStop(1, '#0a0a0a');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Ondas sutiles
      ctx.save();
      ctx.globalAlpha = 0.1;
      
      for (let i = 0; i < 3; i++) {
        const waveY = height * 0.5 + Math.sin(time + i * 2) * 50;
        const waveGradient = ctx.createLinearGradient(0, waveY - 25, 0, waveY + 25);
        waveGradient.addColorStop(0, 'transparent');
        waveGradient.addColorStop(0.5, `hsl(${15 + i * 10}, 100%, 50%)`);
        waveGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = waveGradient;
        ctx.fillRect(0, waveY - 25, width, 50);
      }
      
      ctx.restore();
    };

    // ============= LOOP DE ANIMACIÓN =============
    const animate = () => {
      drawBackground();
      animationRef.current = requestAnimationFrame(animate);
    };

    // ============= MANEJO DE RESIZE =============
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // ============= EVENT LISTENERS =============
    window.addEventListener('resize', handleResize);

    // Iniciar animación
    animate();

    // ============= CLEANUP =============
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default InteractiveBackground;
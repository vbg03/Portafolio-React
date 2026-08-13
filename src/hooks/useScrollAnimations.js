const useScrollAnimations = () => {
  const triggerRipple = (element, x, y) => {
    // Crear efecto de ondas (ripple)
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(247, 85, 161, 0.3)';
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

  return {
    triggerRipple,
    addGlowEffect
  };
};

export default useScrollAnimations;

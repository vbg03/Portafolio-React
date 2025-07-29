import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useGSAP = () => {
  const timelineRef = useRef();

  useEffect(() => {
    // Crear timeline principal
    timelineRef.current = gsap.timeline();

    // Cleanup al desmontar
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return timelineRef.current;
};

export default useGSAP;
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseGlow = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement using spring physics
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(150, 47, 191, 0.15) 0%, rgba(225, 48, 108, 0.05) 50%, transparent 80%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0, 
        x: springX,
        y: springY,
        mixBlendMode: 'screen'
      }}
    />
  );
});

export default MouseGlow;

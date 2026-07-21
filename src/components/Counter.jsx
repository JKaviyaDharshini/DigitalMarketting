import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion, useTransform } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Parse the number from strings like "$50M+" or "120+"
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const prefix = value.split(numberMatch[0])[0] || '';
  const suffix = value.split(numberMatch[0])[1] || '';

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // Small animation to make the numbers count up
      const controls = animate(count, targetNumber, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, targetNumber, count]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// We need animate from framer-motion directly for manual animation of motion values in useEffect
import { animate } from 'framer-motion';

export default Counter;

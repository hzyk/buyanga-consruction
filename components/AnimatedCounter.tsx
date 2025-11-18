
import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(step);
        }
      };
      animationFrameId.current = requestAnimationFrame(step);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className={className}>
      {count}
    </span>
  );
};

export default AnimatedCounter;

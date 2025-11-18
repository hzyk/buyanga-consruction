
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className, delay = '0ms' }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

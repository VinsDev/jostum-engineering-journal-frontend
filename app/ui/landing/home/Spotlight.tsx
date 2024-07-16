"use client";

import React, { useState, useEffect } from 'react';

interface SpotlightProps {
  children: React.ReactNode;
}

const Spotlight: React.FC<SpotlightProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default Spotlight;
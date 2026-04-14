'use client';

import React from 'react';

/**
 * LiquidGlass Component (Showcase)
 * High-end SVG Refraction & Specular Lighting engine for realistic glassmorphism.
 */

interface LiquidGlassProps {
  children: React.ReactNode;
  id?: string;
  intensity?: number;
  className?: string;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({ 
  children, 
  id = 'liquid-refraction', 
  intensity = 4,
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute invisible h-0 w-0" aria-hidden="true">
        <defs>
          <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise">
              <animate attributeName="baseFrequency" values="0.04;0.045;0.04" dur="15s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={intensity} xChannelSelector="R" yChannelSelector="G" result="refracted" />
            <feSpecularLighting in="noise" surfaceScale="2" specularConstant="1.2" specularExponent="60" lightingColor="#fff" result="specular">
              <fePointLight x="-100" y="-100" z="400" />
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceGraphic" operator="in" result="specular-on-graphic" />
            <feBlend in="refracted" in2="specular-on-graphic" mode="screen" />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: `url(#${id})` }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default LiquidGlass;

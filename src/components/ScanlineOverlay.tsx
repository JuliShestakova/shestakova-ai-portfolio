'use client';

import React from 'react';

export const ScanlineOverlay: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[100] scanline opacity-[0.05]" />
      <div className="fixed inset-0 pointer-events-none z-[101] crt-grid opacity-[0.03]" />
      <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </>
  );
};

export default ScanlineOverlay;

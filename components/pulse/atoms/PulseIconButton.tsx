import React from 'react';

export const PulseIconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...rest }) => {
  return (
    <button {...rest} className={`w-9 h-9 rounded-md bg-white/4 flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default PulseIconButton;

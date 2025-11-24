import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...rest }) => {
  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 bg-white/6 text-white px-3 py-1.5 rounded-md hover:brightness-110 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

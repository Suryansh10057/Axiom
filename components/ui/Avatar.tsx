import React from 'react';

export const Avatar: React.FC<{ src?: string; alt?: string; size?: number; className?: string }> = ({ src, alt = '', size = 40, className = '' }) => {
  return (
    <div style={{ width: size, height: size }} className={`rounded-md overflow-hidden bg-white/6 ${className}`}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-white/8" />}
    </div>
  );
};

export default Avatar;

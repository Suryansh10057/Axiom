import React from 'react';

export const ScrollArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => {
  return (
    <div {...rest} className={`overflow-y-auto scrollbar-thin scrollbar-thumb-white/6 ${className}`}>
      {children}
    </div>
  );
};

export default ScrollArea;

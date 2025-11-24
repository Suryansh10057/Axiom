import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children, className = '', ...rest }) => {
  return (
    <div
      {...rest}
      className={`pulse-card shadow-pulse-sm p-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

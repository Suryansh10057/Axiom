import React from 'react';

export const Badge: React.FC<{
  children?: React.ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'muted';
  className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
  const base = 'text-xs px-2 py-0.5 inline-flex items-center gap-2';
  const variants: Record<string, string> = {
    default: 'bg-white/6 text-white/90',
    success: 'bg-[var(--pulse-positive)]/10 text-[var(--pulse-positive)]',
    danger: 'bg-[var(--pulse-negative)]/10 text-[var(--pulse-negative)]',
    muted: 'bg-white/3 text-white/60'
  };
  return <span className={`${base} ${variants[variant]} ${className} pulse-chip`}>{children}</span>;
};

export default Badge;

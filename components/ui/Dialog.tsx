import React from 'react';

export const Dialog: React.FC<{ open: boolean; onClose: () => void; children?: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-[720px] bg-[var(--pulse-card-bg)] border border-white/6 rounded-md p-6">
        {children}
      </div>
    </div>
  );
};

export default Dialog;

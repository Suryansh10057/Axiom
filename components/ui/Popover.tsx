import React from 'react';

export const Popover: React.FC<{ content: React.ReactNode; children: React.ReactNode }> = ({ content, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute right-0 mt-2 hidden group-hover:block bg-[#0b1220] border border-white/6 p-2 rounded-md text-sm">
        {content}
      </div>
    </div>
  );
};

export default Popover;

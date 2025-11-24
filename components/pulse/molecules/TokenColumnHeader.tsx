import React from 'react';
import { Button } from '../../ui/Button';
import { Zap, Settings2, ChevronDown } from 'lucide-react';

export const TokenColumnHeader: React.FC<{ title:string; subtitle?:string; count?: number }> = ({title,subtitle,count}) => {
  return (
    <div className="mb-4 pb-3 border-b border-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-[#526fff]" />
          <div className="text-sm font-semibold text-white">{title}</div>
          {count !== undefined && (
            <span className="text-xs text-white/50 bg-white/5 px-2 py-0.5 rounded">{count}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 rounded transition">
            <Settings2 size={12} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 rounded transition">
            <ChevronDown size={12} />
          </button>
        </div>
      </div>
      {subtitle && <div className="text-xs text-white/50 mt-1">{subtitle}</div>}
    </div>
  )
}

export default TokenColumnHeader;

import React from 'react';
import TokenLogo from '../atoms/TokenLogo';
import { Badge } from '../../ui/Badge';
import { Copy, Star, MoreHorizontal } from 'lucide-react';

export const TokenCardHeader: React.FC<{ name:string; symbol?:string; address?:string; logo?:string; badge?:string; icon?:string }>=({name,symbol,address,logo,badge,icon})=>{
  return (
    <div className="flex items-start gap-3">
      <TokenLogo src={logo} size={48} corner={
        <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f1720]"></div>
      } />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="text-sm font-semibold truncate">{name}</div>
          {icon && <span className="text-xs">{icon}</span>}
        </div>
        <div className="text-[11px] text-white/50 truncate font-mono flex items-center gap-1.5">
          <span>{address}</span>
          <button className="hover:text-white/70 transition">
            <Copy size={9} />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-1">
          {symbol && <span className="text-xs text-white/60">{symbol}</span>}
          {badge && badge !== '' && <Badge variant="success" className="text-[10px] px-1.5 py-0">{badge}</Badge>}
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        <button className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/70 transition">
          <Star size={11} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/70 transition">
          <MoreHorizontal size={11} />
        </button>
      </div>
    </div>
  )
}

export default TokenCardHeader;

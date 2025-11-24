import React from 'react';

export const StatPill: React.FC<{ label?: string; value?: React.ReactNode; tone?: 'pos'|'neg'|'info'|'muted' }>=({label, value, tone='muted'})=>{
  const toneMap: Record<string,string> = {
    pos: 'text-[var(--pulse-positive)]',
    neg: 'text-[var(--pulse-negative)]',
    info: 'text-[var(--pulse-info)]',
    muted: 'text-white/60'
  }
  return (
    <div className={`text-xs flex items-center gap-2 ${toneMap[tone]} `}>
      {label && <span className="text-white/60">{label}</span>}
      {value && <span className="font-medium">{value}</span>}
    </div>
  )
}

export default StatPill;

import React from 'react';

export const MetricLabel: React.FC<{ label: string; value: React.ReactNode; className?: string }>=({label,value,className=''})=>{
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xs text-white/60">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  )
}

export default MetricLabel;

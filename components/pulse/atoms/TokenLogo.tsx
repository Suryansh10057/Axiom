import React from 'react';
import Avatar from '../../ui/Avatar';

export const TokenLogo: React.FC<{ src?: string; size?: number; corner?: React.ReactNode }>=({src,size=48,corner})=>{
  return (
    <div className="relative inline-block" style={{width:size}}>
      <div style={{width:size, height:size}} className="rounded-md overflow-hidden bg-white/6">
        {src ? <img src={src} alt="logo" className="w-full h-full object-cover"/> : <div className="w-full h-full bg-white/8" />}
      </div>
      {corner && <div className="absolute -top-1 -right-1">{corner}</div>}
    </div>
  )
}

export default TokenLogo;

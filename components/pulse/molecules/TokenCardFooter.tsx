import React from 'react';
import { Badge } from '../../ui/Badge';
import { TrendingUp, TrendingDown, Activity, Circle } from 'lucide-react';

export const TokenCardFooter: React.FC<{ stats?: Array<{label:string,value:string, tone?:string}> }> = ({stats=[]}) => {
  const getVariant = (tone?: string) => {
    if (tone === 'pos') return 'success';
    if (tone === 'neg') return 'danger';
    if (tone === 'info') return 'default';
    return 'muted';
  };

  const getIcon = (tone?: string) => {
    if (tone === 'pos') return <TrendingUp size={10} />;
    if (tone === 'neg') return <TrendingDown size={10} />;
    if (tone === 'info') return <Activity size={10} />;
    return <Circle size={8} />;
  };
  
  return (
    <div className="mt-3 flex items-center gap-2 flex-wrap">
      {stats.map((s, i) => (
        <Badge key={i} variant={getVariant(s.tone)} className="text-[10px] px-2 py-0.5 flex items-center gap-1">
          {getIcon(s.tone)}
          <span>{s.label}</span>
        </Badge>
      ))}
    </div>
  )
}

export default TokenCardFooter;

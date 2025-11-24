import React from 'react';
import Card from '../ui/Card';
import TokenCardHeader from './molecules/TokenCardHeader';
import TokenCardFooter from './molecules/TokenCardFooter';
import { MetricLabel } from './atoms/MetricLabel';
import { StatPill } from './atoms/StatPill';
import { Badge } from '../ui/Badge';
import { TrendingUp, TrendingDown, Users, Clock } from 'lucide-react';

type Token = {
  id: string;
  name: string;
  symbol?: string;
  address?: string;
  mc?: string;
  vol?: string;
  tx?: string;
  age?: string;
  badges?: string[];
}

export const TokenCard: React.FC<{ token: Token; onOpen?: (t:Token)=>void }> = ({ token, onOpen }) => {
  return (
    <div className="mb-3">
      <div
        role="button"
        onClick={() => onOpen?.(token)}
        className="pulse-card p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-pulse-sm cursor-pointer"
      >
        <TokenCardHeader name={token.name} symbol={token.symbol} address={token.address || '0x..4444'} logo={undefined} badge={token.badges?.[0]} />

        <div className="mt-3 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-[10px] text-white/50 uppercase">MC</div>
              <div className="text-sm font-semibold text-cyan-400">{token.mc}</div>
            </div>
            <div>
              <div className="text-[10px] text-white/50 uppercase">V</div>
              <div className="text-sm font-medium">{token.vol}</div>
            </div>
          </div>
          <div></div>
          <div className="text-xs text-white/50 flex items-center gap-1">
            <span className="text-white/70">TX {token.tx}</span>
          </div>
        </div>

        <TokenCardFooter stats={[
          {label:'12%', value:'12%', tone:'pos'},
          {label:'DS', value:'8%', tone:'info'},
          {label:'0%', value:'8%', tone:'neg'}
        ]} />
      </div>
    </div>
  );
};

export default TokenCard;

import React, {useState} from 'react';
import Card from '../ui/Card';
import TokenColumnHeader from './molecules/TokenColumnHeader';
import ScrollArea from '../ui/ScrollArea';
import TokenCard from './TokenCard';
import { Skeleton } from '../ui/Skeleton';

export const TokenColumn: React.FC<{ title:string; subtitle?:string; tokens:any[]; onTokenOpen?: (t:any)=>void }> = ({title,subtitle,tokens,onTokenOpen})=>{
  const [loading] = useState(false);
  return (
    <Card className="h-full p-4">
      <TokenColumnHeader title={title} subtitle={subtitle} count={tokens.length} />
      <div className="h-[65vh]">
        <ScrollArea className="h-full pr-2">
          {loading ? (
            Array.from({length:4}).map((_,i)=>(<div key={i} className="mb-3"><Skeleton className="h-32 rounded-pulse"/></div>))
          ) : (
            tokens.map((t)=> <TokenCard key={t.id} token={t} onOpen={onTokenOpen} />)
          )}
        </ScrollArea>
      </div>
    </Card>
  )
}

export default TokenColumn;

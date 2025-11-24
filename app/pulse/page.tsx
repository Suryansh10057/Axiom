'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TokenColumn from '../../components/pulse/TokenColumn';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ScrollArea } from '../../components/ui/ScrollArea';
import { Dialog } from '../../components/ui/Dialog';
import { Tooltip } from '../../components/ui/Tooltip';
import { Search, Bell, User, Settings, ChevronDown, BarChart3, Volume2, BookmarkIcon, Wallet, Star } from 'lucide-react';
import { PulseIconButton } from '../../components/pulse/atoms/PulseIconButton';

const NEW = [
  { id: '1', name: '东风快递', symbol: 'Dongfeng Express', address: '0x7f_4444', mc: '$6.15K', vol: '$4K', tx: '0/2', age: '24s', badges:[''] },
  { id: '2', name: '4BLV', symbol: 'FourBelieve', address: '0x6e_4444', mc: '$6.94K', vol: '$1K', tx: '0/1', age: '25s' },
  { id: '3', name: 'DAGT', symbol: 'DemoToken', address: '0x7d_4444', mc: '$6.49K', vol: '$825', tx: '0/4', age: '57s' },
  { id: '10', name: 'WEED', symbol: 'WeedToken', address: '0x5e_4444', mc: '$5.95K', vol: '$763', tx: '0/3', age: '1m' }
];

const FINAL = [
  { id: '4', name: 'LENS', symbol: 'AsterLens', address: '0x4d_4444', mc: '$69.7K', vol: '$54K', tx: '0/1', age: '10h', badges:['Paid'] },
  { id: '5', name: 'SAFU', symbol: 'SAFU', address: '0x62_4444', mc: '$46.3K', vol: '$11K', tx: '1/17', age: '2h' },
  { id: '6', name: 'DankDoge', symbol: 'DankDoge', address: '0x8d_4444', mc: '$45.4K', vol: '$11K', tx: '0/9', age: '9h' },
  { id: '11', name: 'TRUMP', symbol: 'TrumpCoin', address: '0x9c_4444', mc: '$42.9K', vol: '$9.8K', tx: '0/6', age: '12h' }
];

const MIGRATED = [
  { id: '7', name: 'pippin', symbol: 'Pippin', address: '0x8d_4444', mc: '$171K', vol: '$195K', tx: '1/1', age: '56m', badges:['Paid'] },
  { id: '8', name: 'HorseKing', symbol: 'HorseKing', address: '0x28_4444', mc: '$35.4K', vol: '$647K', tx: '6/119', age: '4h' },
  { id: '9', name: 'BULLA', symbol: 'Hasbulla', address: '0x54_4444', mc: '$323K', vol: '$1.6M', tx: '1/1', age: '5h', badges:['Paid'] },
  { id: '12', name: 'PEPE2.0', symbol: 'PepeV2', address: '0x3a_4444', mc: '$213K', vol: '$890K', tx: '0/8', age: '7h' }
];

export default function PulsePage(){
  const [openToken, setOpenToken] = useState<any>(null);
  
  return (
    <div className="min-h-screen p-6 bg-background text-white">
      {/* Top navbar - exact match from screenshot */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
        <div className="flex items-center gap-8">
          <Image src="/axiom.svg" alt="Axiom" width={32} height={32} className="rounded-full" />
          <nav className="flex gap-6 text-sm font-medium">
            <a className="text-white/60 hover:text-white cursor-pointer transition">Discover</a>
            <a className="text-[#526fff] cursor-pointer">Pulse</a>
            <a className="text-white/60 hover:text-white cursor-pointer transition">Trackers</a>
            <a className="text-white/60 hover:text-white cursor-pointer transition">Perpetuals</a>
            <a className="text-white/60 hover:text-white cursor-pointer transition">Portfolio</a>
            <a className="text-white/60 hover:text-white cursor-pointer transition">Rewards</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Tooltip content="Search">
            <PulseIconButton>
              <Search size={18} className="text-white/70" />
            </PulseIconButton>
          </Tooltip>
          <div className="flex items-center gap-2 bg-white/6 rounded-lg px-3 py-2 text-sm border border-white/5">
            <span className="text-yellow-500">🪙</span>
            <span className="text-white font-medium">BNB</span>
            <ChevronDown size={14} className="text-white/50" />
          </div>
          <Button className="bg-[#526fff] hover:bg-[#4557e6] text-white font-semibold px-5 py-2 rounded-lg">Deposit</Button>
          <Tooltip content="Favorites">
            <PulseIconButton>
              <Star size={18} className="text-white/70" />
            </PulseIconButton>
          </Tooltip>
          <Tooltip content="Wallet">
            <PulseIconButton className="relative">
              <Wallet size={18} className="text-white/70" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-500 rounded-full"></span>
            </PulseIconButton>
          </Tooltip>
          <div className="flex items-center gap-2 bg-white/6 rounded-lg px-3 py-2 text-sm border border-white/5">
            <span className="text-cyan-400">💎</span>
            <span className="text-white font-medium">0</span>
            <ChevronDown size={14} className="text-white/50" />
          </div>
          <Tooltip content="Profile">
            <PulseIconButton>
              <User size={18} className="text-white/70" />
            </PulseIconButton>
          </Tooltip>
        </div>
      </div>

      {/* Sub-nav - Pulse section header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#526fff]/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-[#526fff] rounded"></div>
            </div>
            <h2 className="text-xl font-semibold">Pulse</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button className="text-xs px-3 py-1.5 bg-white/6 hover:bg-white/8 rounded-md border border-white/5">
              <div className="w-1.5 h-1.5 bg-[#526fff] rounded-full mr-1.5"></div>
              P1
            </Button>
            <Button className="text-xs px-3 py-1.5 bg-white/4 hover:bg-white/6 rounded-md text-white/60">P2</Button>
            <Button className="text-xs px-3 py-1.5 bg-white/4 hover:bg-white/6 rounded-md text-white/60">P3</Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Tooltip content="Display options">
            <Button className="text-sm bg-white/6 hover:bg-white/8 px-3 py-1.5 rounded-md flex items-center gap-2">
              <BarChart3 size={14} className="text-white/70" />
              <span>Display</span>
              <ChevronDown size={14} className="text-white/50" />
            </Button>
          </Tooltip>
          <Tooltip content="Bookmarks">
            <PulseIconButton>
              <BookmarkIcon size={16} className="text-white/70" />
            </PulseIconButton>
          </Tooltip>
          <Tooltip content="Volume">
            <PulseIconButton>
              <Volume2 size={16} className="text-white/70" />
            </PulseIconButton>
          </Tooltip>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-5 h-5 bg-white/6 rounded flex items-center justify-center">
              <span className="text-[10px] font-semibold">1</span>
            </div>
            <div className="flex items-center gap-1 bg-white/6 px-2 py-1 rounded">
              <span className="text-yellow-500">⚡</span>
              <span className="text-white/80">0</span>
            </div>
            <div className="flex items-center gap-1 bg-white/6 px-2 py-1 rounded">
              <span className="text-cyan-400">💎</span>
              <span className="text-white/80">0</span>
            </div>
            <ChevronDown size={14} className="text-white/50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <TokenColumn title="New Pairs" subtitle="" tokens={NEW} onTokenOpen={setOpenToken} />
        <TokenColumn title="Final Stretch" subtitle="" tokens={FINAL} onTokenOpen={setOpenToken} />
        <TokenColumn title="Migrated" subtitle="" tokens={MIGRATED} onTokenOpen={setOpenToken} />
      </div>

      {/* Bottom bar - exact match from screenshot */}
      <div className="fixed bottom-4 left-6 right-6 flex items-center justify-between px-4 py-2.5 bg-[#0b1015] rounded-lg border border-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#526fff]/10 px-3 py-1.5 rounded-md border border-[#526fff]/20">
            <BarChart3 size={14} className="text-[#526fff]" />
            <span className="text-sm font-semibold text-white">PRESET 1</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="text-base">💼</span>
              <span>1</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Wallet size={12} />
              <span>0</span>
            </span>
            <span>❌</span>
            <span>🌐</span>
            <span>PnL</span>
            <span>Docs</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Connection is stable</span>
          </div>
          <span>•</span>
          <span className="font-medium text-white/70">GLOBAL</span>
          <ChevronDown size={14} />
        </div>
      </div>

      {/* Token Detail Dialog */}
      <Dialog open={!!openToken} onClose={() => setOpenToken(null)}>
        {openToken && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{openToken.name}</h3>
              <button onClick={() => setOpenToken(null)} className="text-white/60 hover:text-white">
                ✕
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Symbol:</span>
                <span>{openToken.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Address:</span>
                <span className="font-mono text-xs">{openToken.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Market Cap:</span>
                <span className="font-semibold">{openToken.mc}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Volume:</span>
                <span>{openToken.vol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Transactions:</span>
                <span>{openToken.tx}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Age:</span>
                <span>{openToken.age}</span>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  )
}

import React, { useState } from 'react';
import { Camera, Eye, Sliders, Maximize2, Monitor, Aperture, Sparkles, RefreshCw } from 'lucide-react';
import { playShutterSound, playUiBeep } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function DirectorViewfinder({ soundEnabled }) {
  const [activeChannel, setActiveChannel] = useState(0);
  const [aspectRatio, setAspectRatio] = useState('16/9'); // '2.39/1', '16/9', '4/3'
  const [lutFilter, setLutFilter] = useState('normal'); // 'normal', 'bw', 'gold', 'vintage'
  const [showGrid, setShowGrid] = useState(true);

  const channels = [
    {
      id: 0,
      title: 'ON SET DIRECTING',
      scene: 'BTS & SET DIRECTING',
      take: 'TAKE 12',
      lens: '50mm Cinema Prime',
      fps: '24 FPS',
      image: '/assets/directing-set.jpg',
      note: 'Sukarya mengarahkan set syuting produksi televisi'
    },
    {
      id: 1,
      title: 'SARAS 008',
      scene: 'EPISODE 01: BANGKITNYA PAHLAWAN',
      take: 'ACTION SCENE',
      lens: '35mm High-Speed Anamorphic',
      fps: '24 FPS',
      image: '/assets/poster-saras-008.jpg',
      note: 'Indosiar 1998-1999 — Tonggak Sejarah Superhero Nasional'
    },
    {
      id: 2,
      title: 'POLICE 86',
      scene: 'PATROLI KOTA & MARKAS POLISI',
      take: 'SCENE 86',
      lens: '28mm Wide Cine',
      fps: '24 FPS',
      image: '/assets/poster-police-86.jpg',
      note: 'Trans TV 2009-2012 — Primetime Sitkom & Action Comedy'
    },
    {
      id: 3,
      title: 'KISAH 9 WALI',
      scene: 'EKSPEDISI DAKWAH NUSANTARA',
      take: 'KOLOSAL 09',
      lens: '85mm Portrait Cine',
      fps: '24 FPS',
      image: '/assets/poster-kisah-9-wali.jpg',
      note: 'Trans TV 2013-2014 — Produksi Drama Kolosal Religi'
    },
    {
      id: 4,
      title: 'THE TRANSMART',
      scene: 'SITKOM STUDIO SET',
      take: 'LIVE AUDIENCE 04',
      lens: '35mm Broadcast T1.8',
      fps: '25 FPS',
      image: '/assets/poster-the-transmart.jpg',
      note: 'Trans TV 2016 — Sitkom Modern Berlatar Ritel'
    },
    {
      id: 5,
      title: 'AKTOR SENIOR: SUKARYA',
      scene: 'CHARACTER STUDY',
      take: 'CLOSE-UP PROFILE',
      lens: '85mm T1.4 Master Cine',
      fps: '24 FPS',
      image: '/assets/acting-portrait-1.jpg',
      note: 'Peran Karakter & Aktor Tamu FTV / Sinetron Indonesia'
    }
  ];

  const current = channels[activeChannel];

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '2.39/1': return 'aspect-[2.39/1] max-w-5xl';
      case '4/3': return 'aspect-[4/3] max-w-2xl';
      default: return 'aspect-[16/9] max-w-4xl';
    }
  };

  const getFilterStyle = () => {
    switch (lutFilter) {
      case 'bw': return 'grayscale contrast-125';
      case 'gold': return 'sepia-[0.35] contrast-110 brightness-105 hue-rotate-[-10deg]';
      case 'vintage': return 'sepia-[0.6] contrast-120 saturate-150';
      default: return 'contrast-105';
    }
  };

  const handleCapture = () => {
    playShutterSound(soundEnabled);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E5A93C', '#FFFFFF', '#D92638']
      });
    } catch (e) {
      // fallback safe
    }
  };

  return (
    <section id="viewfinder" className="py-24 relative overflow-hidden bg-cinema-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <Aperture className="w-3.5 h-3.5" />
            <span>INTERACTIVE DIRECTOR&apos;S MONITOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Ruang Monitor Sutradara
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/70">
            Simulasi visual kontrol di balik layar. Alihkan channel kamera, ganti aspect ratio sinema, dan amati framing penyutradaraan Sukarya secara interaktif.
          </p>
        </div>

        {/* Viewfinder Main Unit */}
        <div className="flex flex-col items-center">
          
          {/* Top Control Bar: Monitor HUD Settings */}
          <div className="w-full max-w-4xl mb-4 p-3 rounded-xl glass-panel flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            {/* Aspect Ratio Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-cinema-muted">FRAME:</span>
              {[
                { label: '2.39:1 Scope', val: '2.39/1' },
                { label: '16:9 HD', val: '16/9' },
                { label: '4:3 Classic', val: '4/3' }
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => {
                    playUiBeep(soundEnabled);
                    setAspectRatio(item.val);
                  }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    aspectRatio === item.val
                      ? 'bg-cinema-gold text-cinema-950 font-bold'
                      : 'bg-black/40 text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* LUT / Color Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-cinema-muted">LUT:</span>
              {[
                { label: 'Rec.709', val: 'normal' },
                { label: 'Golden', val: 'gold' },
                { label: 'Noir B&W', val: 'bw' },
                { label: 'Vintage TV', val: 'vintage' }
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => {
                    playUiBeep(soundEnabled);
                    setLutFilter(item.val);
                  }}
                  className={`px-2 py-1 rounded transition-colors ${
                    lutFilter === item.val
                      ? 'bg-white/20 text-cinema-gold font-bold border border-cinema-gold/40'
                      : 'bg-black/40 text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Grid & Snapshot Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  playUiBeep(soundEnabled);
                  setShowGrid(!showGrid);
                }}
                className={`px-2.5 py-1 rounded flex items-center space-x-1.5 transition-colors ${
                  showGrid ? 'bg-cinema-gold/20 text-cinema-gold' : 'bg-black/40 text-white/50'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>GRID</span>
              </button>

              <button
                onClick={handleCapture}
                className="px-3 py-1 rounded bg-cinema-crimson hover:bg-red-600 text-white font-bold flex items-center space-x-1.5 shadow-md shadow-cinema-crimson/30 transition-transform active:scale-95"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>SNAP</span>
              </button>
            </div>
          </div>

          {/* The Monitor Screen */}
          <div className="relative w-full flex justify-center">
            <div
              className={`relative w-full ${getAspectClass()} rounded-2xl overflow-hidden bg-black border-4 border-cinema-800 shadow-2xl shadow-black transition-all duration-500`}
            >
              {/* Image Feed */}
              <img
                src={current.image}
                alt={current.title}
                className={`w-full h-full object-contain md:object-cover object-center transition-all duration-700 ${getFilterStyle()}`}
              />

              {/* Grid / Crosshair HUD Overlay */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Rule of Thirds Lines */}
                  <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/15" />
                  <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-white/15" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/15" />
                  <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/15" />

                  {/* 90% Safe Area Action Box */}
                  <div className="absolute inset-8 border border-cinema-gold/30 rounded pointer-events-none">
                    <div className="absolute top-1 left-2 text-[9px] font-mono text-cinema-gold/60">
                      SAFE AREA 90%
                    </div>
                  </div>

                  {/* Center Target */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none flex items-center justify-center">
                    <div className="w-4 h-[1px] bg-cinema-gold/70" />
                    <div className="h-4 w-[1px] bg-cinema-gold/70 absolute" />
                  </div>
                </div>
              )}

              {/* Top Viewfinder HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
                <div className="flex items-center space-x-2 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-cinema-crimson animate-ping" />
                  <span className="font-bold text-white tracking-widest">CAM 0{activeChannel + 1}</span>
                  <span className="text-cinema-gold font-bold">{current.title}</span>
                </div>
                <div className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm text-cinema-muted">
                  SCENE: <span className="text-white font-medium">{current.scene}</span>
                </div>
              </div>

              {/* Bottom Viewfinder HUD */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
                <div className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm text-white/80">
                  LENS: <span className="text-cinema-gold">{current.lens}</span> &bull; {current.fps}
                </div>
                <div className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm text-cinema-gold font-bold">
                  {current.take}
                </div>
              </div>

            </div>
          </div>

          {/* Description Caption */}
          <div className="mt-4 text-center max-w-xl">
            <p className="text-xs font-mono text-cinema-goldLight">
              &ldquo;{current.note}&rdquo;
            </p>
          </div>

          {/* Channel Selector Buttons (Bottom Deck) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {channels.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  playClapperSound(soundEnabled);
                  setActiveChannel(idx);
                }}
                className={`px-3 py-2 rounded-xl text-left font-mono transition-all duration-200 border ${
                  activeChannel === idx
                    ? 'bg-cinema-gold text-cinema-950 font-bold border-cinema-gold shadow-lg shadow-cinema-gold/30 scale-105'
                    : 'bg-cinema-900/80 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className="text-[10px] tracking-widest uppercase opacity-75">
                  CHANNEL 0{idx + 1}
                </div>
                <div className="text-xs font-semibold font-display tracking-wide truncate max-w-[140px]">
                  {ch.title}
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

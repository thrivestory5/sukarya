import React from 'react';
import { Film, Award, ShieldCheck, Play, ArrowDown, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { playClapperSound, playUiBeep } from '../utils/soundEffects';

export default function Hero({ soundEnabled }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cinema-gold/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cinema-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Director Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Clapperboard Take Info */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-cinema-goldLight">
              <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold animate-ping" />
              <span className="tracking-widest uppercase">PRODUKSI NASIONAL &bull; SCENE 01 / TAKE 44</span>
            </div>

            {/* Main Name & Titles */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-none">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/70">
                  SUKARYA
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xl sm:text-2xl font-display font-semibold tracking-wide text-cinema-gold">
                  SUTRADARA & AKTOR SENIOR
                </span>
                <span className="text-xs font-mono text-white/40 px-2 py-0.5 rounded bg-black/40 border border-white/10">
                  {PROFILE.alias}
                </span>
              </div>
            </div>

            {/* Tagline / Bio Statement */}
            <p className="text-base sm:text-lg text-cinema-silver/80 font-normal leading-relaxed max-w-2xl">
              Dedikasi lebih dari <strong className="text-white font-semibold">4 dekade</strong> dalam lanskap sinema, serial drama, komedi situasi, dan pertelevisian Indonesia. Mengarahkan <strong className="text-cinema-gold font-semibold">44+ karya populer</strong> termasuk fenomena kultus <em className="text-white">Saras 008</em>, <em className="text-white">Police 86</em>, <em className="text-white">Sketsa</em>, dan serial kolosal religi <em className="text-white">Kisah 9 Wali</em>.
            </p>

            {/* Official Credentials Pill Bar */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-cinema-900/80 border border-cinema-gold/30 text-xs font-mono text-cinema-goldLight">
                <ShieldCheck className="w-4 h-4 text-cinema-gold" />
                <span>KFT: Lisensi Profesi Sutradara</span>
              </div>
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-cinema-900/80 border border-white/10 text-xs font-mono text-white/80">
                <Award className="w-4 h-4 text-cinema-gold" />
                <span>Pengurus Besar PB PARFI</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#filmography"
                onClick={() => playClapperSound(soundEnabled)}
                className="group relative inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gold-gradient text-cinema-950 font-bold text-sm tracking-wide shadow-xl shadow-cinema-gold/25 hover:shadow-cinema-gold/40 hover:brightness-110 active:scale-95 transition-all duration-300"
              >
                <span>Jelajahi 44+ Mahakarya</span>
                <Film className="w-4 h-4 text-cinema-950 group-hover:rotate-12 transition-transform" />
              </a>

              <a
                href="/PORTOFOLIO SUKARYA.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => playUiBeep(soundEnabled)}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cinema-gold" />
                <span>Unduh CV Resmi (PDF)</span>
              </a>
            </div>

            {/* Quick Stat Counter Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-cinema-900/40 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-black font-display text-cinema-gold">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cinema-muted mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Portrait in Director's Viewfinder HUD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Viewfinder Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-black/60 border border-white/15 shadow-2xl shadow-black">
                
                {/* Film Clapper Top Stripes Bar */}
                <div className="h-3 w-full rounded-t-lg clapper-stripes mb-2 border-b border-black" />

                {/* Viewfinder Screen Display */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-cinema-950">
                  <img
                    src={PROFILE.photos.hero}
                    alt="Sukarya - Film & TV Director"
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-black/40 pointer-events-none" />

                  {/* HUD Camera Crosshairs & Framing Lines */}
                  <div className="absolute inset-4 border border-white/20 rounded pointer-events-none">
                    {/* Corner Crosshair Ticks */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cinema-gold" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cinema-gold" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cinema-gold" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cinema-gold" />

                    {/* Center Crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none">
                      <div className="w-full h-[1px] bg-white/40 absolute top-1/2 -translate-y-1/2" />
                      <div className="h-full w-[1px] bg-white/40 absolute left-1/2 -translate-x-1/2" />
                    </div>
                  </div>

                  {/* Camera HUD Overlays Top & Bottom */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-white/70 pointer-events-none">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-cinema-crimson animate-pulse" />
                      <span className="text-white font-bold">LIVE STBY</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/60 border border-white/20 text-cinema-gold">
                      ARRI RAW &bull; 4K
                    </span>
                    <span>ISO 800</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-white/80 pointer-events-none">
                    <span>35mm T1.5</span>
                    <span className="text-cinema-gold font-bold">1/48 sec</span>
                    <span>WB 5600K</span>
                  </div>

                  {/* Director Identity Pill */}
                  <div className="absolute bottom-14 left-6 right-6 p-2.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">
                          SUKARYA SUTAN MARAJO
                        </p>
                        <p className="text-[10px] text-cinema-gold font-mono">
                          Anggota KFT & PB PARFI
                        </p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-cinema-gold/20 flex items-center justify-center text-cinema-gold">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Viewfinder Bottom Status */}
                <div className="flex items-center justify-between px-3 py-2 text-[10px] font-mono text-white/50">
                  <span>BATTERY 98%</span>
                  <span className="text-cinema-gold">TIME REMAINING: 184 MIN</span>
                  <span>TC: 23.976 FPS</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Infinite Marquee Ribbon of Iconic Works */}
      <div className="relative mt-12 py-3 bg-cinema-900/60 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            'SARAS 008 (INDOSIAR)',
            'POLICE 86 (TRANS TV)',
            'SKETSA (TRANS TV)',
            'KISAH 9 WALI (TRANS TV)',
            'CERMIN KEHIDUPAN (TRANS 7)',
            'THE TRANSMART (TRANS TV)',
            'PONDOK PAK CUS (TRANS TV)',
            'ANGRY BOSS (MD ENTERTAINMENT)',
            'CAHAYA HIKMAH (MNC TV)',
            'BIKERS TIDAK HARUS SANGAR (RCTI)',
            'KATAKAN PUTUS (TRANS TV)',
            'BELAHAN HATI (FREMANTLE / RCTI)',
            'TEATER MATAHARI & TIM (1982-PRESENT)',
          ].concat([
            'SARAS 008 (INDOSIAR)',
            'POLICE 86 (TRANS TV)',
            'SKETSA (TRANS TV)',
            'KISAH 9 WALI (TRANS TV)',
            'CERMIN KEHIDUPAN (TRANS 7)',
            'THE TRANSMART (TRANS TV)',
            'PONDOK PAK CUS (TRANS TV)',
            'ANGRY BOSS (MD ENTERTAINMENT)',
            'CAHAYA HIKMAH (MNC TV)',
            'BIKERS TIDAK HARUS SANGAR (RCTI)',
            'KATAKAN PUTUS (TRANS TV)',
            'BELAHAN HATI (FREMANTLE / RCTI)',
            'TEATER MATAHARI & TIM (1982-PRESENT)',
          ]).map((item, idx) => (
            <span key={idx} className="mx-6 text-xs font-mono tracking-widest text-white/50 flex items-center space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold inline-block" />
              <span className="hover:text-cinema-gold transition-colors">{item}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

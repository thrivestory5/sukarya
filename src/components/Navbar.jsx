import React, { useState, useEffect } from 'react';
import { Film, Clapperboard, Volume2, VolumeX, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { playClapperSound, playUiBeep } from '../utils/soundEffects';

export default function Navbar({ soundEnabled, setSoundEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live 24fps cinema timecode simulator
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const hours = String(Math.floor(elapsed / 3600000) % 24).padStart(2, '0');
      const minutes = String(Math.floor(elapsed / 60000) % 60).padStart(2, '0');
      const seconds = String(Math.floor(elapsed / 1000) % 60).padStart(2, '0');
      const frames = String(Math.floor((elapsed % 1000) / (1000 / 24))).padStart(2, '0');
      setTimecode(`${hours}:${minutes}:${seconds}:${frames}`);
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (href) => {
    playUiBeep(soundEnabled);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Mahakarya', href: '#filmography' },
    { label: 'Poster Pilihan', href: '#posters' },
    { label: 'Viewfinder', href: '#viewfinder' },
    { label: 'Teater & Rekam Jejak', href: '#biografi' },
    { label: 'Lisensi & KFT', href: '#kredensial' },
    { label: 'Edukasi', href: '#edukasi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-cinema-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Director Badge */}
          <a
            href="#"
            onClick={() => playClapperSound(soundEnabled)}
            className="group flex items-center space-x-3 text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cinema-gold to-amber-700 flex items-center justify-center text-cinema-950 shadow-lg shadow-cinema-gold/20 group-hover:scale-105 transition-transform duration-300">
              <Clapperboard className="w-5 h-5 text-cinema-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display tracking-[0.25em] text-lg font-extrabold text-white group-hover:text-cinema-gold transition-colors">
                  SUKARYA
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-cinema-gold/20 text-cinema-goldLight border border-cinema-gold/30">
                  DIR
                </span>
              </div>
              <p className="text-[11px] text-cinema-muted font-mono tracking-wider">
                SUTRADARA &bull; AKTOR SENIOR
              </p>
            </div>
          </a>

          {/* Center: Rec Timecode Display (Awwwards Film Detail) */}
          <div className="hidden lg:flex items-center space-x-3 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 font-mono text-xs text-cinema-muted">
            <span className="flex items-center space-x-1.5 text-cinema-crimson">
              <span className="w-2 h-2 rounded-full bg-cinema-crimson animate-ping" />
              <span className="w-2 h-2 rounded-full bg-cinema-crimson -ml-3.5" />
              <span className="font-bold tracking-widest text-[11px]">REC</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-cinema-gold font-medium tracking-widest">{timecode}</span>
            <span className="text-white/20">|</span>
            <span className="text-[10px] tracking-wider text-white/50">24 FPS &bull; 4K</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-xs font-medium tracking-wide text-cinema-silver hover:text-cinema-gold hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Sound FX Toggle & Contact Pill */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Sound Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playClapperSound(true);
              }}
              title={soundEnabled ? 'Mute Cinema Sound FX' : 'Enable Cinema Sound FX'}
              className={`p-2 rounded-full border transition-all duration-300 ${
                soundEnabled
                  ? 'border-cinema-gold/40 text-cinema-gold bg-cinema-gold/10 shadow-sm shadow-cinema-gold/20'
                  : 'border-white/10 text-white/40 hover:text-white/80 bg-black/40'
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 animate-pulse-subtle" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Direct Booking CTA */}
            <a
              href="#kontak"
              onClick={() => playClapperSound(soundEnabled)}
              className="relative inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gold-gradient text-cinema-950 hover:brightness-110 shadow-lg shadow-cinema-gold/25 hover:shadow-cinema-gold/40 transition-all duration-300 active:scale-95"
            >
              <span>Booking</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-lg border border-white/10 bg-black/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl glass-panel border border-cinema-gold/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cinema-gold animate-ping" />
              <span className="text-xs font-mono text-cinema-gold tracking-widest">{timecode}</span>
            </div>
            <span className="text-[11px] font-mono text-white/50">DIRECTOR SUKARYA</span>
          </div>
          <div className="flex flex-col space-y-2 mt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2.5 text-sm font-medium text-cinema-silver hover:text-cinema-gold hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-cinema-muted" />
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => handleNavClick('#kontak')}
              className="mt-2 text-center py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-gold-gradient text-cinema-950 shadow-md"
            >
              Hubungi / Diskusi Proyek
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

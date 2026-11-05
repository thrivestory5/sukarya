import React, { useState } from 'react';
import { Film, Sparkles, ExternalLink, X, Tv, Calendar, Tag, Clapperboard, Award } from 'lucide-react';
import { FEATURED_POSTERS } from '../data/portfolioData';
import { playClapperSound, playUiBeep } from '../utils/soundEffects';

export default function FeaturedPosters({ soundEnabled }) {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Action Superhero', 'Sitkom', 'Drama Kolosal', 'Religi & Spiritual'];

  const filteredPosters = activeFilter === 'Semua'
    ? FEATURED_POSTERS
    : FEATURED_POSTERS.filter(p => {
        if (activeFilter === 'Sitkom') return p.category.includes('Sitkom');
        if (activeFilter === 'Action Superhero') return p.category.includes('Action');
        if (activeFilter === 'Drama Kolosal') return p.category.includes('Kolosal');
        if (activeFilter === 'Religi & Spiritual') return p.category.includes('Religi') || p.category.includes('Spiritual');
        return true;
      });

  const handleOpenPoster = (poster) => {
    playClapperSound(soundEnabled);
    setSelectedPoster(poster);
  };

  const handleClosePoster = () => {
    playUiBeep(soundEnabled);
    setSelectedPoster(null);
  };

  return (
    <section id="posters" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cinema-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
              <Film className="w-3.5 h-3.5" />
              <span>OFFICIAL PRODUCTION POSTERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Galeri Poster Karya Ikonik
            </h2>
            <p className="text-sm sm:text-base text-cinema-silver/70 max-w-xl">
              Arsip visual karya sinetron, sitkom, serial laga superhero, dan drama religi yang diarahkan langsung oleh Sukarya sepanjang karirnya.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playUiBeep(soundEnabled);
                  setActiveFilter(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 border ${
                  activeFilter === cat
                    ? 'bg-cinema-gold text-cinema-950 font-bold border-cinema-gold shadow-md shadow-cinema-gold/20'
                    : 'bg-cinema-900/60 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Poster Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosters.map((poster, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenPoster(poster)}
              className="group cursor-pointer rounded-2xl glass-panel overflow-hidden border border-white/10 hover:border-cinema-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cinema-gold/20 flex flex-col"
            >
              {/* Poster Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cinema-950 flex items-center justify-center p-3">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Network Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-cinema-gold">
                  {poster.network}
                </div>

                {/* Year Pill */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white/80">
                  {poster.year}
                </div>

                {/* Quick Inspect Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-cinema-gold text-cinema-950 font-bold text-xs tracking-wider uppercase shadow-xl flex items-center space-x-1.5">
                    <span>Lihat Detail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Poster Info Card Footer */}
              <div className="p-4 flex-1 flex flex-col justify-between border-t border-white/5 bg-cinema-900/40">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-cinema-gold uppercase tracking-wider mb-1">
                    <Tag className="w-3 h-3" />
                    <span>{poster.category}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-cinema-gold transition-colors line-clamp-1">
                    {poster.title}
                  </h3>
                  <p className="text-xs text-cinema-silver/70 mt-1 line-clamp-2 leading-relaxed">
                    {poster.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cinema-muted">
                  <span className="truncate max-w-[150px]">{poster.role}</span>
                  <span className="text-cinema-gold font-semibold">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClosePoster}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl glass-panel border border-cinema-gold/40 shadow-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePoster}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/70 hover:text-white border border-white/10 hover:border-white/30 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Poster Preview */}
              <div className="rounded-xl overflow-hidden bg-black/80 p-2 border border-white/10 flex items-center justify-center max-h-[460px]">
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className="w-auto h-full max-h-[440px] object-contain rounded"
                />
              </div>

              {/* Poster Information */}
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-cinema-gold/15 text-cinema-gold text-xs font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>{selectedPoster.highlight || 'Mahakarya Pilihan'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  {selectedPoster.title}
                </h3>

                <div className="space-y-2 text-xs font-mono text-cinema-silver">
                  <div className="flex items-center space-x-2">
                    <span className="text-cinema-muted w-24">TAHUN:</span>
                    <span className="text-white font-bold">{selectedPoster.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cinema-muted w-24">NETWORK:</span>
                    <span className="text-cinema-gold font-bold">{selectedPoster.network}</span>
                  </div>
                  {selectedPoster.productionHouse && (
                    <div className="flex items-center space-x-2">
                      <span className="text-cinema-muted w-24">PROD. HOUSE:</span>
                      <span className="text-white">{selectedPoster.productionHouse}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="text-cinema-muted w-24">PERAN:</span>
                    <span className="text-white font-semibold">{selectedPoster.role}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cinema-muted w-24">KATEGORI:</span>
                    <span className="text-white">{selectedPoster.category}</span>
                  </div>
                </div>

                <p className="text-sm text-cinema-silver/80 leading-relaxed pt-2 border-t border-white/10">
                  {selectedPoster.description}
                </p>

                <div className="pt-4 flex items-center space-x-3">
                  <a
                    href="#kontak"
                    onClick={handleClosePoster}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gold-gradient text-cinema-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-cinema-gold/20"
                  >
                    Diskusikan Proyek Serupa
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

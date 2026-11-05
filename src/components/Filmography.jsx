import React, { useState, useMemo } from 'react';
import { Film, Search, Filter, Tv, Calendar, Building, Sparkles, Check, ChevronDown, Clapperboard, User } from 'lucide-react';
import { DIRECTING_WORKS, ACTING_WORKS } from '../data/portfolioData';
import { playClapperSound, playUiBeep } from '../utils/soundEffects';

export default function Filmography({ soundEnabled }) {
  const [activeTab, setActiveTab] = useState('directing'); // 'directing', 'acting', 'all'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (newest), 'asc' (oldest)

  const networks = ['ALL', 'TRANSTV', 'INDOSIAR', 'RCTI', 'TRANS7', 'MNCTV', 'TVRI'];

  // Flattened combined list for "all"
  const flattenedDirecting = useMemo(() => {
    return DIRECTING_WORKS.map((item) => ({
      ...item,
      categoryType: 'Sutradara',
      searchableText: `${item.title} ${item.format} ${item.ph || ''} ${item.network} ${item.genre} ${item.year}`.toLowerCase(),
      sortYear: typeof item.year === 'number' ? item.year : parseInt(String(item.year).split('-')[0]) || 2000
    }));
  }, []);

  const flattenedActing = useMemo(() => {
    const list = [];
    ACTING_WORKS.forEach((group) => {
      group.roles.forEach((r, idx) => {
        list.push({
          id: `act-${idx}`,
          title: r.title,
          format: group.category,
          roleDetail: r.role,
          network: r.network || 'Layar Lebar',
          ph: r.ph || 'Film Nasional',
          year: r.year || 'Era 1980s-2000s',
          genre: 'Pemeran / Aktor',
          categoryType: 'Aktor',
          searchableText: `${r.title} ${r.role} ${r.network || ''} ${group.category}`.toLowerCase(),
          sortYear: 1990
        });
      });
    });
    return list;
  }, []);

  const displayedItems = useMemo(() => {
    let source = [];
    if (activeTab === 'directing') source = flattenedDirecting;
    else if (activeTab === 'acting') source = flattenedActing;
    else source = [...flattenedDirecting, ...flattenedActing];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      source = source.filter((item) => item.searchableText.includes(q));
    }

    // Filter by Network
    if (selectedNetwork !== 'ALL') {
      source = source.filter((item) => 
        (item.network || '').toUpperCase().includes(selectedNetwork)
      );
    }

    // Sort by Year
    return [...source].sort((a, b) => {
      if (sortOrder === 'desc') return b.sortYear - a.sortYear;
      return a.sortYear - b.sortYear;
    });
  }, [activeTab, searchQuery, selectedNetwork, sortOrder, flattenedDirecting, flattenedActing]);

  return (
    <section id="filmography" className="py-24 relative overflow-hidden bg-cinema-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>ARSIP UTUH MAHA KARYA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Katalog Filmografi & Rekam Jejak
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/70">
            Daftar lengkap 44 judul penyutradaraan televisi dan belasan peran layar lebar & sinetron. Gunakan filter pencarian untuk menemukan karya spesifik.
          </p>
        </div>

        {/* Control Center: Tabs, Search, Network Filters */}
        <div className="space-y-4 mb-8">
          
          {/* Main Role Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'directing', label: 'Sutradara (44 Judul)', icon: Clapperboard, count: DIRECTING_WORKS.length },
              { id: 'acting', label: 'Aktor & Pemeran (15+ Judul)', icon: User, count: flattenedActing.length },
              { id: 'all', label: 'Semua Kredit', icon: Film, count: DIRECTING_WORKS.length + flattenedActing.length }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClapperSound(soundEnabled);
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-cinema-gold text-cinema-950 font-bold border-cinema-gold shadow-lg shadow-cinema-gold/25 scale-105'
                      : 'bg-cinema-900/80 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Secondary Filters */}
          <div className="p-4 rounded-2xl glass-panel flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cinema-muted" />
              <input
                type="text"
                placeholder="Cari judul (contoh: Saras, Sketsa, 9 Wali)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/10 focus:border-cinema-gold focus:outline-none text-xs text-white placeholder-white/30 font-mono transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Network Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-[11px] font-mono text-cinema-muted mr-1 hidden sm:inline">
                BROADCASTER:
              </span>
              {networks.map((net) => (
                <button
                  key={net}
                  onClick={() => {
                    playUiBeep(soundEnabled);
                    setSelectedNetwork(net);
                  }}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    selectedNetwork === net
                      ? 'bg-white/20 text-cinema-gold font-bold border border-cinema-gold/40'
                      : 'bg-black/30 text-white/50 hover:text-white'
                  }`}
                >
                  {net}
                </button>
              ))}
            </div>

            {/* Sort Toggle */}
            <button
              onClick={() => {
                playUiBeep(soundEnabled);
                setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-cinema-silver hover:text-white"
            >
              <span>Urutan: {sortOrder === 'desc' ? 'Terbaru &rarr; Klasik' : 'Klasik &rarr; Terbaru'}</span>
            </button>

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-cinema-muted mb-4 px-2">
          <span>Menampilkan <strong className="text-cinema-gold">{displayedItems.length}</strong> karya</span>
          <span>Standard Lisensi KFT & PB PARFI</span>
        </div>

        {/* Filmography Cards / Table Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="group p-5 rounded-xl glass-panel border border-white/10 hover:border-cinema-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-black flex flex-col justify-between"
            >
              <div>
                {/* Header: Number / Category & Year */}
                <div className="flex items-center justify-between text-[11px] font-mono text-cinema-muted mb-2">
                  <span className="text-cinema-gold font-bold tracking-wider">
                    {typeof item.id === 'number' ? `#${String(item.id).padStart(2, '0')}` : 'ACT'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-white/80">
                      {item.year}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cinema-gold/15 text-cinema-gold font-semibold">
                      {item.categoryType}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-cinema-gold transition-colors">
                  {item.title}
                </h3>

                {/* Format / Subtitle */}
                <p className="text-xs text-cinema-silver/70 font-mono mt-1">
                  {item.format}
                </p>

                {/* Role detail if acting */}
                {item.roleDetail && (
                  <p className="text-xs text-amber-300/90 font-mono mt-2 bg-amber-950/30 p-2 rounded border border-amber-500/20">
                    Peran: {item.roleDetail}
                  </p>
                )}
              </div>

              {/* Footer Meta: Network & Production House */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span className="flex items-center space-x-1.5 text-cinema-gold font-medium">
                  <Tv className="w-3.5 h-3.5" />
                  <span>{item.network}</span>
                </span>
                {item.ph && (
                  <span className="truncate max-w-[150px] text-white/40">
                    {item.ph}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {displayedItems.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl glass-panel">
            <Film className="w-12 h-12 text-cinema-muted mx-auto mb-3 opacity-40" />
            <p className="text-white font-medium text-base">Tidak ada karya yang cocok dengan pencarian.</p>
            <p className="text-xs text-cinema-muted mt-1">Coba kata kunci lain atau pilih stasiun TV yang berbeda.</p>
          </div>
        )}

      </div>
    </section>
  );
}

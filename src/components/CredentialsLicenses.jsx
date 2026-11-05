import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, Sparkles, ExternalLink, QrCode, FileCheck } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { playUiBeep } from '../utils/soundEffects';

export default function CredentialsLicenses({ soundEnabled }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="kredensial" className="py-24 relative overflow-hidden bg-cinema-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AKREDITASI &amp; LISENSI RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Kredensial Profesi KFT &amp; PB PARFI
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/70">
            Tervalidasi resmi oleh dua organisasi perfilman dan pertelevisian tertinggi di Republik Indonesia: KFT Indonesia dan Persatuan Artis Film Indonesia.
          </p>
        </div>

        {/* Two Holographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: KFT Indonesia - Lisensi Profesi Sutradara */}
          <div
            onMouseEnter={() => {
              playUiBeep(soundEnabled);
              setActiveCard('kft');
            }}
            onMouseLeave={() => setActiveCard(null)}
            className="group rounded-3xl p-6 sm:p-8 glass-panel border border-cinema-gold/30 hover:border-cinema-gold/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cinema-gold/20 hologram-card relative flex flex-col justify-between"
          >
            {/* Top Bar Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cinema-gold/20 border border-cinema-gold/40 flex items-center justify-center text-cinema-gold font-bold font-display">
                  KFT
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">KFT INDONESIA</h3>
                  <p className="text-[11px] font-mono text-cinema-goldLight">Karyawan Film dan Televisi</p>
                </div>
              </div>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                <CheckCircle2 className="w-3 h-3" />
                <span>TERLENGKAP</span>
              </span>
            </div>

            {/* License Image Preview */}
            <div className="my-6 relative rounded-2xl overflow-hidden bg-black/60 p-2 border border-white/10 flex items-center justify-center aspect-[4/3] group-hover:border-cinema-gold/40 transition-colors">
              <img
                src="/assets/kft-license.jpg"
                alt="Lisensi Profesi Sutradara KFT Indonesia - Sukarya"
                className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Credential Data Points */}
            <div className="space-y-2 text-xs font-mono text-cinema-silver">
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">KOMPETENSI:</span>
                <span className="text-cinema-gold font-bold">SUTRADARA / DIRECTOR</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">NOMOR LISENSI:</span>
                <span className="text-white font-bold tracking-wider">3840/C/20/XIV/2024</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">NAMA PEMEGANG:</span>
                <span className="text-white">SUKARYA ST MARAJO</span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cinema-muted">
              <span>Status: <strong className="text-emerald-400">Aktif &amp; Terlisensi</strong></span>
              <span className="text-cinema-gold">Lisensi Sutradara</span>
            </div>
          </div>

          {/* Card 2: PB PARFI - Persatuan Artis Film Indonesia */}
          <div
            onMouseEnter={() => {
              playUiBeep(soundEnabled);
              setActiveCard('parfi');
            }}
            onMouseLeave={() => setActiveCard(null)}
            className="group rounded-3xl p-6 sm:p-8 glass-panel border border-cinema-gold/30 hover:border-cinema-gold/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cinema-gold/20 hologram-card relative flex flex-col justify-between"
          >
            {/* Top Bar Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-600/40 flex items-center justify-center text-amber-400 font-bold font-display">
                  PARFI
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">PB PARFI</h3>
                  <p className="text-[11px] font-mono text-cinema-goldLight">Persatuan Artis Film Indonesia</p>
                </div>
              </div>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/30 text-[10px] font-mono font-bold">
                <Award className="w-3 h-3" />
                <span>PENGURUS BESAR</span>
              </span>
            </div>

            {/* Card Image Preview */}
            <div className="my-6 relative rounded-2xl overflow-hidden bg-black/60 p-2 border border-white/10 flex items-center justify-center aspect-[4/3] group-hover:border-cinema-gold/40 transition-colors">
              <img
                src="/assets/parfi-card.jpg"
                alt="PB PARFI Kartu Tanda Anggota & Pengurus Besar - Sukarya"
                className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Credential Data Points */}
            <div className="space-y-2 text-xs font-mono text-cinema-silver">
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">JABATAN ORGANISASI:</span>
                <span className="text-cinema-gold font-bold">Pengurus Besar (Program &amp; Profesi)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">NO. ANGGOTA (KTA):</span>
                <span className="text-white font-bold tracking-wider">AB .01.00051.90.20</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40">
                <span className="text-cinema-muted">MASA BERLAKU:</span>
                <span className="text-white">September 2025 (Renewable)</span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cinema-muted">
              <span>Status: <strong className="text-emerald-400">Pengurus Aktif</strong></span>
              <span className="text-cinema-gold">Bidang Program &amp; Profesi</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

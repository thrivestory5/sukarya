import React, { useState, useEffect } from 'react';
import { Clapperboard, ArrowUp, Heart, Film, ShieldCheck } from 'lucide-react';
import { playClapperSound } from '../utils/soundEffects';

export default function Footer({ soundEnabled }) {
  const [jakartaTime, setJakartaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setJakartaTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClapperSound(soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cinema-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Film Strip Border Accents Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-cinema-950 shadow-lg shadow-cinema-gold/30">
              <Clapperboard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display text-white">SUKARYA</h3>
              <p className="text-xs font-mono text-cinema-goldLight">Sutradara &bull; Aktor Senior &bull; Penulis Skenario</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-cinema-muted">
            <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">
              <span>JAKARTA (WIB): </span>
              <strong className="text-cinema-gold">{jakartaTime}</strong>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-cinema-gold hover:text-cinema-950 text-white transition-all duration-300"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-left text-xs font-mono text-cinema-silver/70">
          
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-display">
              ORGANISASI &amp; AKREDITASI
            </p>
            <p>KFT Indonesia: Lisensi Profesi Sutradara No. 3840/C/20/XIV/2024</p>
            <p>PB PARFI: Pengurus Besar Bidang Program &amp; Profesi No. AB .01.00051.90.20</p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-display">
              NAVIGASI UTAMA
            </p>
            <ul className="space-y-1.5">
              <li><a href="#filmography" className="hover:text-cinema-gold transition-colors">44+ Karya Sutradara</a></li>
              <li><a href="#posters" className="hover:text-cinema-gold transition-colors">Galeri Poster Ikonik</a></li>
              <li><a href="#viewfinder" className="hover:text-cinema-gold transition-colors">Monitor Viewfinder Interaktif</a></li>
              <li><a href="#biografi" className="hover:text-cinema-gold transition-colors">Teater &amp; TIM (1982)</a></li>
              <li><a href="#kredensial" className="hover:text-cinema-gold transition-colors">Lisensi Resmi KFT &amp; PARFI</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-display">
              KARYA MAHA POPULER
            </p>
            <ul className="space-y-1.5">
              <li>Saras 008 (Indosiar)</li>
              <li>Police 86 (Trans TV)</li>
              <li>Sketsa Komedi (Trans TV)</li>
              <li>Kisah 9 Wali (Trans TV)</li>
              <li>The Transmart &amp; Pondok Pak Cus</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-display">
              KONTAK &amp; ALAMAT
            </p>
            <p>HP/WA: 081311159557</p>
            <p>Telp Rumah: 021 8829188</p>
            <p>Email: sukaryastmarajo@gmail.com</p>
            <p>Tambun Utara, Bekasi, Jawa Barat</p>
          </div>

        </div>

        {/* Bottom copyright & film roll note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-cinema-muted gap-4">
          <p>
            &copy; {new Date().getFullYear()} SUKARYA. Hak Cipta Dilindungi Undang-Undang. Portofolio Sinema &amp; Televisi Indonesia.
          </p>
          <div className="flex items-center space-x-2">
            <span>Crafted with Cinematic Precision</span>
            <span>&bull;</span>
            <span className="text-cinema-gold">Awwwards Quality</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

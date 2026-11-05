import React from 'react';
import { Theater, Sparkles, BookOpen, Users, Feather, CheckCircle2, ArrowRight } from 'lucide-react';
import { THEATER_TIMELINE, PROFILE } from '../data/portfolioData';

export default function BiographyTheater() {
  return (
    <section id="biografi" className="py-24 relative overflow-hidden bg-cinema-900/30 border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cinema-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <Theater className="w-3.5 h-3.5" />
            <span>AKAR ARTISTIK &bull; SEJAK 1982</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Dedikasi Teater, Naskah &amp; Pembinaan Generasi
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/80 leading-relaxed">
            Sebelum layar televisi modern menyala, seni peran dan pengarahan panggung telah ditempa melalui disiplin panggung klasik Jakarta, adaptasi mahakarya sastra dunia, hingga panggung terhormat Taman Ismail Marzuki.
          </p>
        </div>

        {/* Editorial Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Storytelling Narrative & Editorial Quote */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="p-8 rounded-2xl glass-panel-gold relative overflow-hidden">
              <Feather className="w-16 h-16 text-cinema-gold/15 absolute -right-4 -bottom-4" />
              <blockquote className="text-lg sm:text-xl font-display italic text-white/95 leading-relaxed">
                &ldquo;Bagi saya, kamera hanyalah perpanjangan mata penonton panggung. Ketepatan emosi aktor, kejelasan ketukan dialog komedi, dan kedalaman pesan moral lahir dari ketekunan membaca manusia.&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-cinema-gold/20 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold font-display text-white">SUKARYA</p>
                  <p className="text-[11px] font-mono text-cinema-gold">Sutradara &bull; Penulis Naskah &bull; Pengajar Teater</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cinema-gold/20 flex items-center justify-center text-cinema-gold font-serif font-black">
                  S
                </div>
              </div>
            </div>

            <div className="space-y-4 text-cinema-silver/80 text-sm leading-relaxed">
              <p>
                Perjalanan dimulai pada tahun <strong className="text-white">1982 bersama Teater Matahari Jakarta</strong>. Sukarya mendalami olah vokal, pembentukan karakter, dan adaptasi sastra, termasuk pementasan monumental <em className="text-cinema-gold font-semibold">&ldquo;Karto Loewak&rdquo;</em> (saduran karya abadi Ben Jonson, <em>Volpone or The Fox</em> karya sutradara Anirun Suyatna).
              </p>
              <p>
                Dedikasi tersebut berlanjut saat bergabung dengan <strong className="text-white">Teater BP7 Pusat Jakarta (1984)</strong>. Tidak hanya sebagai aktor panggung, panggilan mendidik membawanya mengajar teater di berbagai sekolah menengah (SMPN 6, SMA Swadaya, SMA Bahariwan 45) serta membina kelompok teater mahasiswa di <strong className="text-white">IKIP Jakarta (Bidang Studi Bahasa &amp; Sastra Indonesia)</strong> dan <strong className="text-white">STIE Gunadarma Depok</strong>.
              </p>
              <p>
                Puncak penyutradaraan panggung Sukarya ditandai dengan pementasan lakon <strong className="text-cinema-gold font-semibold">&ldquo;Whattapa (?)&rdquo;</strong> naskah orisinil karyanya sendiri di panggung prestisius <strong className="text-white">Teater Tertutup Taman Ismail Marzuki (TIM)</strong>.
              </p>
            </div>

            {/* Quick Pillars of Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-cinema-950/60 border border-white/10 flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cinema-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Penulis Skenario &amp; Drama</p>
                  <p className="text-[11px] text-cinema-muted">Naskah film, sinetron, dan lakon teater panggung.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-cinema-950/60 border border-white/10 flex items-start space-x-3">
                <Users className="w-4 h-4 text-cinema-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Master Acting Coach</p>
                  <p className="text-[11px] text-cinema-muted">Pengajar akting agensi film &amp; kampus terkemuka.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Photo & Production Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Photo on Set / Directing */}
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-3 shadow-2xl">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                <img
                  src={PROFILE.photos.directing}
                  alt="Sukarya Directing On Set"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-cinema-gold font-bold">
                    BEHIND THE SCENES
                  </span>
                  <span className="text-white/80">Dokumentasi Produksi</span>
                </div>
              </div>
            </div>

            {/* Milestone Stage Productions Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-display text-white flex items-center space-x-2">
                <Theater className="w-4 h-4 text-cinema-gold" />
                <span>Pementasan Panggung Monumental</span>
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">WHATTAPA (?)</h4>
                    <p className="text-[11px] text-cinema-muted mt-0.5">
                      Naskah &amp; Sutradara: Sukarya &bull; Pementasan Teater Tertutup Taman Ismail Marzuki (TIM)
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cinema-gold/15 text-cinema-gold">TIM</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">JURAGAN DARKUM</h4>
                    <p className="text-[11px] text-cinema-muted mt-0.5">
                      Naskah: Sukarya &bull; Sutradara Pementasan Seni &amp; Sarasehan Kampus STIE Gunadarma Depok
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">DEPOK</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">KARTO LOEWAK (VOLPONE)</h4>
                    <p className="text-[11px] text-cinema-muted mt-0.5">
                      Saduran Anirun Suyatna dari naskah Ben Jonson &bull; Teater Matahari &amp; BP7 Pusat
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">KLASIK</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Timeline Sequence: 1982 to Present */}
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold font-display text-white mb-8 text-center">
            Kronologi Jejak Langkah Seni Peran &amp; Pembinaan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEATER_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cinema-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-black font-display text-cinema-gold tracking-wide">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-cinema-muted border border-white/5">
                      FASE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {item.event}
                  </h4>
                  <p className="text-xs text-cinema-silver/70 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cinema-gold flex items-center space-x-1">
                  <span>&bull;</span>
                  <span className="truncate">{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

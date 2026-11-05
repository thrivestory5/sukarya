import React from 'react';
import { GraduationCap, Award, Globe, BookOpen, Film, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export default function EducationTraining() {
  return (
    <section id="edukasi" className="py-24 relative overflow-hidden bg-cinema-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>LATAR BELAKANG PENDIDIKAN &amp; DIKLAT INTERNASIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Pendidikan &amp; Standardisasi Produksi
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/70">
            Kombinasi studi formal ilmu sosial-keagamaan serta pelatihan intensif sistem industri perfilman dunia: Lisensi Amerika Serikat (Grundy/Fremantle), Hong Kong TVB, dan CFI Prancis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Specialized International Production Diklats (4 items) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl font-bold font-display text-white flex items-center space-x-2 mb-4">
              <Globe className="w-5 h-5 text-cinema-gold" />
              <span>Standardisasi &amp; Diklat Penyutradaraan Internasional</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION_LIST.certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cinema-gold/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-cinema-gold font-bold">{item.year}</span>
                      <span className="px-2 py-0.5 rounded bg-black/60 text-white/50 border border-white/5">
                        DIKLAT KHUSUS
                      </span>
                    </div>

                    <h4 className="text-base font-bold font-display text-white">
                      {item.title}
                    </h4>

                    <p className="text-xs font-mono text-cinema-goldLight mt-1.5 font-medium">
                      {item.institution}
                    </p>

                    <p className="text-xs text-cinema-silver/70 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-1.5 text-[11px] font-mono text-white/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cinema-gold" />
                    <span>Sertifikasi Kompetensi Resmi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Education */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold font-display text-white flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-cinema-gold" />
              <span>Pendidikan Formal</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.formal.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-cinema-gold mb-2">
                    <span>{edu.period}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">FORMAL</span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display">
                    {edu.institution}
                  </h4>

                  <p className="text-xs text-cinema-silver/80 font-mono mt-1">
                    {edu.degree} {edu.faculty ? `— ${edu.faculty}` : ''}
                  </p>
                </div>
              ))}

              {/* Philosophical synthesis banner */}
              <div className="p-6 rounded-2xl glass-panel-gold border border-cinema-gold/30">
                <p className="text-xs font-mono text-cinema-gold uppercase tracking-wider font-bold mb-1">
                  INTEGRITAS KARYA
                </p>
                <p className="text-xs text-cinema-silver/80 leading-relaxed">
                  Latar belakang studi Islam dan bahasa Arab memperkuat kedalaman riset dan nilai spiritual dalam penggarapan karya drama religi seperti <em>Kisah 9 Wali</em>, <em>Cahaya Hikmah</em>, dan puluhan judul <em>Cermin Kehidupan</em>.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

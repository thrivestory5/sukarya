import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Download, Check, Copy, Sparkles, Clapperboard } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { playClapperSound, playUiBeep } from '../utils/soundEffects';

export default function ContactBooking({ soundEnabled }) {
  const [projectType, setProjectType] = useState('Sutradara FTV / Serial');
  const [clientName, setClientName] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  const projectOptions = [
    'Sutradara FTV / Serial',
    'Sutradara Film Layar Lebar',
    'Penulisan Naskah / Skenario',
    'Aktor Karakter / Guest Star',
    'Workshop Teater & Acting Coach',
    'Konsultasi Produksi'
  ];

  const handleCopy = (text, key) => {
    playUiBeep(soundEnabled);
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    playClapperSound(soundEnabled);
    const greeting = `Halo Pak Sukarya,%0A%0ASaya: ${encodeURIComponent(clientName || 'Rekan Kreatif')}%0AKeperluan: ${encodeURIComponent(projectType)}%0APesan: ${encodeURIComponent(clientMessage || 'Saya ingin berdiskusi mengenai proyek produksi/kreatif.')}%0A%0AMohon informasi ketersediaan jadwal bapak. Terima kasih!`;
    const waUrl = `https://wa.me/6281311159557?text=${greeting}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-cinema-950 border-t border-white/5">
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cinema-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 text-xs font-mono text-cinema-gold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>KOLABORASI &amp; PRODUKSI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Mulai Diskusi &amp; Kerjasama Proyek
          </h2>
          <p className="text-sm sm:text-base text-cinema-silver/70">
            Terbuka untuk kolaborasi penyutradaraan sinema/televisi, penulisan skenario, coaching seni peran, serta konsultasi produksi profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cinema-gold/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-cinema-muted uppercase">TELEPON &amp; WHATSAPP</h4>
                    <p className="text-lg font-bold font-mono text-white">{PROFILE.contact.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE.contact.phone, 'hp')}
                  className="p-2 rounded-lg bg-black/40 text-white/60 hover:text-white border border-white/10"
                  title="Salin nomor"
                >
                  {copiedKey === 'hp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cinema-muted">
                <span>Telepon Rumah: <strong>{PROFILE.contact.homePhone}</strong></span>
                <a
                  href={`tel:${PROFILE.contact.phone}`}
                  className="text-cinema-gold hover:underline font-bold"
                >
                  Panggil Langsung &rarr;
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cinema-gold/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cinema-gold/20 text-cinema-gold flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-cinema-muted uppercase">SURAT ELEKTRONIK</h4>
                    <p className="text-base font-bold font-mono text-white">{PROFILE.contact.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE.contact.email, 'email')}
                  className="p-2 rounded-lg bg-black/40 text-white/60 hover:text-white border border-white/10"
                  title="Salin email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-white/5 flex justify-end">
                <a
                  href={`mailto:${PROFILE.contact.email}?subject=Diskusi%20Proyek%20Film%20/%20Televisi`}
                  className="text-xs font-mono text-cinema-gold hover:underline font-bold"
                >
                  Kirim Email &rarr;
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cinema-gold/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-cinema-muted uppercase">DOMISILI &amp; KANTOR KERJA</h4>
                    <p className="text-xs text-cinema-silver/90 mt-1 leading-relaxed">
                      {PROFILE.contact.address}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PROFILE.contact.address, 'addr')}
                  className="p-2 rounded-lg bg-black/40 text-white/60 hover:text-white border border-white/10 shrink-0 ml-2"
                  title="Salin alamat"
                >
                  {copiedKey === 'addr' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Download Official CV PDF Card */}
            <div className="p-6 rounded-2xl glass-panel-gold border border-cinema-gold/30">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold font-display text-white">Unduh Curriculum Vitae (PDF)</h4>
                  <p className="text-xs text-cinema-silver/80 mt-0.5">Dokumen resmi asli portofolio Sukarya</p>
                </div>
                <a
                  href="/PORTOFOLIO SUKARYA.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClapperSound(soundEnabled)}
                  className="p-3 rounded-xl bg-gold-gradient text-cinema-950 font-bold hover:brightness-110 shadow-lg shadow-cinema-gold/20 transition-all"
                  title="Unduh PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Terminal */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-panel border border-cinema-gold/30 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Formulir Diskusi Cepat</h3>
                  <p className="text-xs font-mono text-cinema-muted">Pesan langsung diteruskan ke WhatsApp pribadi</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-cinema-gold/20 flex items-center justify-center text-cinema-gold">
                  <Clapperboard className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5 text-left">
                
                {/* Project Category Selection */}
                <div>
                  <label className="block text-xs font-mono text-cinema-silver uppercase tracking-wider mb-2">
                    Kategori Kebutuhan Proyek:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => {
                          playUiBeep(soundEnabled);
                          setProjectType(opt);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all border ${
                          projectType === opt
                            ? 'bg-cinema-gold text-cinema-950 font-bold border-cinema-gold shadow-md shadow-cinema-gold/20'
                            : 'bg-black/40 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-cinema-silver uppercase tracking-wider mb-1.5">
                    Nama Anda / PH / Institusi:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: PT Kreasi Film Nusantara / Budi Pratama"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cinema-gold focus:outline-none text-sm text-white placeholder-white/30 font-mono transition-colors"
                  />
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-xs font-mono text-cinema-silver uppercase tracking-wider mb-1.5">
                    Rincian Kebutuhan / Sinopsis Singkat:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan ringkas mengenai genre karya, timeline rencana syuting, atau kebutuhan coaching yang diinginkan..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cinema-gold focus:outline-none text-sm text-white placeholder-white/30 font-mono transition-colors"
                  />
                </div>

                {/* Submit via WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-cinema-950 font-bold text-sm tracking-wide shadow-xl shadow-cinema-gold/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-cinema-950" />
                  <span>Kirim via WhatsApp (Respon Cepat)</span>
                </button>

                <p className="text-[11px] font-mono text-cinema-muted text-center">
                  *Terhubung langsung dengan nomor pribadi Sukarya (081311159557)
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

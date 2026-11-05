import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { playClapperSound } from '../utils/soundEffects';

export default function WhatsAppFloat({ soundEnabled }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '6281311159557';
  const defaultMessage = 'Halo Pak Sukarya, saya melihat portofolio bapak di website dan tertarik untuk berdiskusi mengenai proyek sinema/televisi.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      
      {/* Tooltip Pill */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/30 text-xs font-mono text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
        <span>Chat Sutradara Sukarya</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playClapperSound(soundEnabled)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-400 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/70 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Hubungi via WhatsApp"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.572 4.184 1.572 5.939l-1.572 5.829 6.012-1.564c1.706.945 3.666 1.488 5.753 1.488 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-cinema-950" />
      </a>

    </div>
  );
}

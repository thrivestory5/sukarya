import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosters from './components/FeaturedPosters';
import DirectorViewfinder from './components/DirectorViewfinder';
import Filmography from './components/Filmography';
import BiographyTheater from './components/BiographyTheater';
import CredentialsLicenses from './components/CredentialsLicenses';
import EducationTraining from './components/EducationTraining';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrailing, setCursorTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize Lenis buttery smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Custom Awwwards Cursor Tracking
  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Smooth trailing cursor animation
  useEffect(() => {
    let frameId;
    const updateTrail = () => {
      setCursorTrailing((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.18,
        y: prev.y + (cursorPos.y - prev.y) * 0.18,
      }));
      frameId = requestAnimationFrame(updateTrail);
    };
    frameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(frameId);
  }, [cursorPos]);

  return (
    <div className="relative min-h-screen bg-cinema-950 text-white selection:bg-cinema-gold selection:text-cinema-950 font-sans">
      
      {/* Film Grain Texture Overlay */}
      <div className="film-grain-overlay" />

      {/* Custom Awwwards Viewfinder Cursor (Desktop only) */}
      <div
        className="hidden md:block fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      >
        <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-cinema-gold' : 'bg-white'} shadow-lg`} />
      </div>

      <div
        className="hidden md:block fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: `${cursorTrailing.x}px`,
          top: `${cursorTrailing.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border ${
            isHovered ? 'border-cinema-gold/70 bg-cinema-gold/10 scale-125' : 'border-white/20'
          }`}
        />
      </div>

      {/* Top Navbar */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Content Stream */}
      <main>
        <Hero soundEnabled={soundEnabled} />
        <FeaturedPosters soundEnabled={soundEnabled} />
        <DirectorViewfinder soundEnabled={soundEnabled} />
        <Filmography soundEnabled={soundEnabled} />
        <BiographyTheater />
        <CredentialsLicenses soundEnabled={soundEnabled} />
        <EducationTraining />
        <ContactBooking soundEnabled={soundEnabled} />
      </main>

      {/* Footer */}
      <Footer soundEnabled={soundEnabled} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat soundEnabled={soundEnabled} />

    </div>
  );
}

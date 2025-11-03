import React from 'react';
import Hero from './components/Hero.jsx';
import AboutStream from './components/AboutStream.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ContactHologram from './components/ContactHologram.jsx';

export default function App() {
  const [audioEnabled, setAudioEnabled] = React.useState(false);
  const audioRef = React.useRef(null);

  // Custom glowing cursor
  const cursorRef = React.useRef(null);
  React.useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const startAudio = () => {
    setAudioEnabled(true);
    requestAnimationFrame(() => {
      audioRef.current?.play().catch(() => {});
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-100">
      {/* Minimalist side menu */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {[
          { href: '#home', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#projects', label: 'Projects' },
          { href: '#contact', label: 'Contact' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 backdrop-blur-md transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label={item.label}
            title={item.label}
          >
            <span className="absolute -inset-0.5 -z-0 rounded-full bg-cyan-400/0 opacity-0 blur-xl transition group-hover:bg-cyan-400/20 group-hover:opacity-100" />
            <span className="relative">{item.label[0]}</span>
          </a>
        ))}
      </nav>

      {/* Sections */}
      <Hero onStartAudio={startAudio} />
      <AboutStream />
      <ProjectsGrid />
      <ContactHologram />

      {/* Ambient audio (enabled after user interaction) */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_3f8d4a8a0b.mp3?filename=ambient-piano-atmosphere-112191.mp3"
        style={{ display: 'none' }}
      />

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/10 shadow-[0_0_60px_rgba(34,211,238,0.35)] backdrop-blur-sm"
        style={{ width: 28, height: 28 }}
      />

      {/* Ambient gradient background layer */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-60" style={{ background: 'radial-gradient(1200px circle at 20% 10%, rgba(34,211,238,0.10), transparent 40%), radial-gradient(1200px circle at 80% 90%, rgba(30,64,175,0.18), transparent 40%)' }} />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-xs text-slate-400">
        <span className="opacity-80">Designed with a calm, neo‑futuristic spirit — inspired by Detroit: Become Human.</span>
      </footer>
    </div>
  );
}

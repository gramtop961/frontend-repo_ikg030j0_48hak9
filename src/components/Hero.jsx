import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onStartAudio }) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-md"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs tracking-widest text-cyan-200">ANDROID INTERFACE ONLINE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl md:text-5xl"
          >
            Hello, I’m <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Raj</span> —
            your creative AI interface today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base"
          >
            A neo‑futuristic portfolio exploring the boundary between humans and intelligent systems —
            calm, cinematic and deeply minimal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-2 flex items-center justify-center gap-3"
          >
            <a href="#projects" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm text-cyan-200 backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-cyan-400/20">
              View Projects
            </a>
            <button onClick={onStartAudio} className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-slate-200 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10">
              Enable Soundscape
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-8 w-px animate-pulse rounded-full bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />
      </div>
    </section>
  );
}

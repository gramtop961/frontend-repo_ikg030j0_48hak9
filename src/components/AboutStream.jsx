import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    year: '2025',
    title: 'Creative AI Interfaces',
    text: 'Designing immersive, emotionally resonant human–AI experiences with tactile motion and holographic UI.'
  },
  {
    year: '2023',
    title: 'Full‑stack Product Craft',
    text: 'Bringing ideas to life end‑to‑end: rapid prototyping, systems thinking, and elegant, scalable code.'
  },
  {
    year: '2021',
    title: 'Visual Systems & Motion',
    text: 'Explored cinematic interactions, generative visuals, and accessibility‑first design patterns.'
  }
];

export default function AboutStream() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 text-slate-100">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          About
        </h2>
        <span className="text-xs tracking-widest text-cyan-300/80">DATA STREAM</span>
      </div>

      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr]">
        {/* Left column */}
        <div className="space-y-10">
          {items.filter((_, i) => i % 2 === 0).map((it, idx) => (
            <StreamCard key={idx} {...it} align="right" />
          ))}
        </div>

        {/* Center glowing spine */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.7)]" />
        </div>

        {/* Right column */}
        <div className="space-y-10">
          {items.filter((_, i) => i % 2 === 1).map((it, idx) => (
            <StreamCard key={idx} {...it} align="left" />
          ))}
        </div>
      </div>
    </section>
  );
}

function StreamCard({ year, title, text, align = 'left' }) {
  const isLeft = align === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`group relative ${isLeft ? 'md:ml-8' : 'md:mr-8'}`}
    >
      <div className="absolute -inset-0.5 -z-0 rounded-xl bg-gradient-to-b from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(8,145,178,0.15)] backdrop-blur-md">
        <div className="mb-2 flex items-center gap-3 text-xs text-cyan-300/90">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {year}
          </span>
          <span className="opacity-60">•</span>
          <span className="tracking-wide">{title}</span>
        </div>
        <p className="text-sm text-slate-300/90">{text}</p>
      </div>
    </motion.div>
  );
}

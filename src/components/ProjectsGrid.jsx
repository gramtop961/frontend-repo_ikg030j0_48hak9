import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Holo UI Kit',
    desc: 'A holographic glass interface system with adaptive glow and motion primitives.',
    tags: ['React', 'Framer Motion', 'Design'],
    link: '#',
  },
  {
    title: 'Neural Canvas',
    desc: 'Generative visuals driven by soundscapes and human input, built for installations.',
    tags: ['WebGL', 'Audio', 'UX'],
    link: '#',
  },
  {
    title: 'Civic Signals',
    desc: 'Calm, data‑rich dashboards with humane defaults and focus on clarity.',
    tags: ['TypeScript', 'Data Viz'],
    link: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 text-slate-100">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
        <span className="text-xs tracking-widest text-cyan-300/80">INTERACTIVE CARDS</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <TiltCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ title, desc, tags, link }) {
  const [t, setT] = React.useState({ x: 0, y: 0 });

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const x = (px - 0.5) * 12; // tilt range
    const y = (py - 0.5) * -12;
    setT({ x, y });
  }

  function reset() {
    setT({ x: 0, y: 0 });
  }

  return (
    <motion.a
      href={link}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: t.y, rotateY: t.x }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,150,200,0.15)] backdrop-blur-md"
    >
      <div className="pointer-events-none absolute -inset-1 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.25), transparent 40%)' }} />
      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-medium text-slate-100">{title}</h3>
          <div className="flex items-center gap-2 text-cyan-300/80">
            <Github size={16} />
            <ExternalLink size={16} />
          </div>
        </div>
        <p className="mb-4 text-sm text-slate-300/90">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

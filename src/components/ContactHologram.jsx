import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactHologram() {
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setMessage('');
    }, 900);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 text-slate-100">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
        <span className="text-xs tracking-widest text-cyan-300/80">HOLOGRAPHIC FORM</span>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,150,200,0.15)] backdrop-blur-xl sm:grid-cols-2"
      >
        <Glow />

        <Field label="Your Name">
          <input required type="text" placeholder="Chloe" className="w-full bg-transparent outline-none placeholder:text-slate-400" />
        </Field>
        <Field label="Email">
          <input required type="email" placeholder="you@domain.com" className="w-full bg-transparent outline-none placeholder:text-slate-400" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <motion.textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Speak your thoughts…"
              className="w-full resize-none bg-transparent outline-none placeholder:text-slate-400"
              animate={{ boxShadow: message ? '0 0 0px rgba(0,0,0,0)' : ['0 0 0 rgba(0,0,0,0)','0 0 0 rgba(0,0,0,0)'] }}
            />
          </Field>
        </div>
        <div className="sm:col-span-2 flex items-center justify-between gap-3">
          <AnimatedTyping text={status === 'sent' ? 'Transmission delivered.' : 'Compose a message to initiate contact.'} />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200 backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-cyan-400/20 disabled:opacity-60"
          >
            <Send size={16} /> {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send'}
          </button>
        </div>
      </motion.form>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="group relative block rounded-xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition focus-within:border-cyan-300/40 focus-within:shadow-[0_0_50px_rgba(34,211,238,0.2)]">
      <div className="mb-2 flex items-center gap-2 text-xs tracking-widest text-cyan-200/80">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        {label}
      </div>
      {children}
    </label>
  );
}

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-70" style={{ background: 'radial-gradient(800px circle at 20% 0%, rgba(34,211,238,0.15), transparent 40%), radial-gradient(800px circle at 80% 100%, rgba(59,130,246,0.12), transparent 40%)' }} />
  );
}

function AnimatedTyping({ text }) {
  const [display, setDisplay] = React.useState('');
  React.useEffect(() => {
    let i = 0;
    setDisplay('');
    const id = setInterval(() => {
      setDisplay((d) => (i < text.length ? d + text[i++] : d));
      if (i >= text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [text]);
  return (
    <div className="font-mono text-xs text-slate-400">
      {display}
      <span className="ml-0.5 inline-block h-4 w-2 animate-pulse rounded bg-slate-400/60 align-middle" />
    </div>
  );
}

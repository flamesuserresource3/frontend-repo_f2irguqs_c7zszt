import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur text-white">Tech • Interactive • Modern</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow">Hi, I’m <span className="text-indigo-200">Alex</span> — I build playful, modern web experiences.</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">Front‑end engineer and product designer crafting delightful, performant interfaces with React, WebGL, and thoughtful motion.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-neutral-900/80 backdrop-blur px-5 py-3 font-medium text-white border border-white/10 hover:bg-neutral-900/60 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60"></div>
    </section>
  );
}

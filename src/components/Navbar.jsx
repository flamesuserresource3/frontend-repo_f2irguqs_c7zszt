import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Folder, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>MyPortfolio</span>
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo('projects')} className="hover:text-indigo-600 transition-colors flex items-center gap-1"> <Folder className="h-4 w-4"/> Projects</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-indigo-600 transition-colors flex items-center gap-1"> <Mail className="h-4 w-4"/> Contact</button>
        </div>
        <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo('contact')}} className="px-3 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:opacity-90">
          Let’s talk
        </a>
      </div>
    </motion.nav>
  );
}

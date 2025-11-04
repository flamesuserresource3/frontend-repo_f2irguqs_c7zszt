import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A data‑dense, animated analytics dashboard with themeable components.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    repo: '#',
    gradient: 'from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20'
  },
  {
    title: '3D Product Gallery',
    description: 'Interactive product viewer powered by WebGL for immersive showcases.',
    tags: ['Three.js', 'Spline', 'Performance'],
    link: '#',
    repo: '#',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-blue-500/20'
  },
  {
    title: 'Portfolio Engine',
    description: 'A modular portfolio system with MDX content and smooth page transitions.',
    tags: ['Vite', 'MDX', 'Motion'],
    link: '#',
    repo: '#',
    gradient: 'from-rose-500/20 via-orange-500/20 to-yellow-500/20'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">A selection of work that blends thoughtful UX, crisp visuals, and playful interactions.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`absolute inset-0 -z-[0] bg-gradient-to-br ${p.gradient} opacity-60`}></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 text-neutral-700 dark:text-neutral-200">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
                    Live <ExternalLink className="h-4 w-4"/>
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:underline">
                    Code <Github className="h-4 w-4"/>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

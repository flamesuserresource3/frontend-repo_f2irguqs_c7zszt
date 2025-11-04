import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-xl">Open to collaborations, freelance projects, and full‑time roles. I usually respond within a day.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90">
                <Mail className="h-4 w-4"/> Email me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 px-5 py-3 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">
                <Github className="h-4 w-4"/> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 px-5 py-3 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">
                <Linkedin className="h-4 w-4"/> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e)=>{e.preventDefault(); const f=e.currentTarget; const name=f.name.value; const email=f.email.value; const message=f.message.value; const mail=`mailto:hello@example.com?subject=Hello%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`; window.location.href=mail;}}
            className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500">Send message</button>
            </div>
          </motion.form>
        </div>
        <p className="mt-12 text-center text-xs text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
      </div>
    </section>
  );
}

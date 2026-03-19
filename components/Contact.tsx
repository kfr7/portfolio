"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "kianranjbar7@gmail.com",
    href: "mailto:kianranjbar7@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kian-ranjbar-12685a20a",
    href: "https://linkedin.com/in/kian-ranjbar-12685a20a",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "github.com/kfr7",
    href: "https://github.com/kfr7",
    icon: "◈",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#00ff41] text-sm tracking-widest mb-2 uppercase">
            // 05. contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-[#8b949e] leading-relaxed">
            Whether it&apos;s a new opportunity, a side project, or just a good
            conversation about tech —{" "}
            <span className="text-[#00cc33]">I&apos;m always open to connect.</span>{" "}
            Currently based in LA, open to remote and hybrid roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="card glow-border p-5 flex items-center gap-4 group text-left"
            >
              <span className="w-10 h-10 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/20 flex items-center justify-center text-[#00ff41] text-lg font-bold shrink-0 group-hover:bg-[#00ff41]/20 transition-colors">
                {link.icon}
              </span>
              <div className="overflow-hidden">
                <p className="text-[#555] text-xs uppercase tracking-widest">
                  {link.label}
                </p>
                <p className="text-[#c9d1d9] text-sm truncate group-hover:text-[#00ff41] transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:kianranjbar7@gmail.com"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="inline-block bg-[#00ff41] text-[#0a0a0a] font-bold px-10 py-4 rounded text-sm tracking-widest hover:bg-[#00cc33] transition-colors active:scale-95"
        >
          Say Hello →
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 border-t border-[#1a1a1a] pt-8 text-[#333] text-xs"
        >
          <p>
            Designed & built by{" "}
            <span className="text-[#555]">Kian Ranjbar</span> — Los Angeles, CA
          </p>
          <p className="mt-1">
            <span className="text-[#00ff41]">●</span> Open to new opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}

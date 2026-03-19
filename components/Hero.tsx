"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Engineer",
  "AI Integration Specialist",
  "System Architect",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* Terminal prompt line */}
        <p className="text-[#555] text-sm mb-4 tracking-widest">
          <span className="text-[#00ff41]">guest@kian</span>
          <span className="text-[#555]">:~$</span>{" "}
          <span className="text-[#888]">whoami</span>
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-[#e6edf3]">Kian </span>
          <span className="text-[#00ff41] glow-green">Ranjbar</span>
        </h1>

        {/* Typewriter role */}
        <div className="text-xl sm:text-2xl text-[#888] mb-8 h-8 flex items-center justify-center gap-1">
          <span className="text-[#00cc33]">&gt;&nbsp;</span>
          <span className="text-[#c9d1d9]">{displayed}</span>
          <span className="animate-blink text-[#00ff41] font-thin">|</span>
        </div>

        {/* Short bio */}
        <p className="text-[#666] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Building products that scale — from AI-powered workflows to polished
          user experiences. Based in{" "}
          <span className="text-[#00cc33]">Los Angeles</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="bg-[#00ff41] text-[#0a0a0a] font-bold px-6 py-3 rounded text-sm tracking-wider hover:bg-[#00cc33] transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-[#00ff41]/50 text-[#00ff41] px-6 py-3 rounded text-sm tracking-wider hover:bg-[#00ff41]/10 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/kian-ranjbar-12685a20a"
            target="_blank"
            rel="noreferrer"
            className="border border-[#333] text-[#888] px-6 py-3 rounded text-sm tracking-wider hover:border-[#555] hover:text-[#aaa] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-10 text-center"
        >
          {[
            { value: "3+", label: "Years Professional Exp." },
            { value: "3.99", label: "GPA @ UCI" },
            { value: "II→III", label: "Promoted in 15 mo." },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-[#00ff41] text-2xl font-bold glow-green">
                {s.value}
              </span>
              <span className="text-[#555] text-xs tracking-wider uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "languages",
    icon: "λ",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "Go", "SQL", "Java", "C++", "C"],
  },
  {
    label: "frontend",
    icon: "◈",
    items: ["React", "Next.js", "Vue.js", "Angular", "Ionic", "Tailwind CSS", "Bootstrap", "SCSS", "HTML", "jQuery"],
  },
  {
    label: "backend",
    icon: "⬡",
    items: ["Node.js", "Express.js", "REST APIs", "PHP"],
  },
  {
    label: "databases",
    icon: "⊞",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    label: "cloud & devops",
    icon: "☁",
    items: ["AWS", "GCP", "Docker", "Jenkins", "TeamCity", "CI/CD", "Webpack", "Vite"],
  },
  {
    label: "ai & llm",
    icon: "◉",
    items: ["OpenAI", "Groq", "Claude API", "Codex", "Perplexity", "Apify"],
  },
  {
    label: "tools",
    icon: "⚙",
    items: ["Git", "GitHub", "GitLab", "Postman", "Sentry", "Datadog", "Rollbar", "Jira", "Figma", "Retool"],
  },
  {
    label: "languages spoken",
    icon: "◎",
    items: ["English (fluent)", "Spanish (fluent)"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff41] text-sm tracking-widest mb-2 uppercase">
            // 02. skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3]">
            Tech I work with
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card glow-border rounded-xl overflow-hidden"
        >
          {/* Terminal titlebar */}
          <div className="bg-[#161616] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-[#555] text-xs tracking-wider">
              skills.json — kian@portfolio
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.05 }}
                onClick={() => setActive(active === group.label ? null : group.label)}
                className="group cursor-pointer"
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00ff41] text-base">{group.icon}</span>
                  <span className="text-[#00cc33] text-xs tracking-widest uppercase">
                    {group.label}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="tag hover:bg-[#00ff41]/15 hover:border-[#00ff41]/40 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom prompt */}
          <div className="border-t border-[#1a1a1a] px-6 py-3 text-[#333] text-xs">
            <span className="text-[#00ff41]">●</span>{" "}
            <span className="text-[#555]">kian@portfolio</span>
            <span className="text-[#333]">:~$</span>{" "}
            <span className="animate-pulse text-[#444]">_</span>
          </div>
        </motion.div>

        {/* Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <p className="text-[#555] text-xs tracking-widest uppercase mb-4">
            // core concepts
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Full-Stack Web Development",
              "Database Design & Optimization",
              "Generative AI",
              "Cloud Computing",
              "Containerization & Orchestration",
              "System Scalability & Performance",
              "DevOps & CI/CD Pipelines",
            ].map((c) => (
              <span
                key={c}
                className="border border-[#00ff41]/15 text-[#666] px-3 py-1 rounded text-xs hover:text-[#00cc33] hover:border-[#00ff41]/35 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

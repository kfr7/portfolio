"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const jobs = [
  {
    id: "brandboom",
    company: "Brandboom",
    logo: "/brandboom_logo.jpg",
    role: "Full-Stack Engineer II → III",
    period: "Jan 2024 – Present",
    type: "Full-Time",
    location: "Los Angeles, CA",
    tagline:
      "Brandboom is a B2B wholesale marketplace serving 5,000+ fashion brands and 600,000+ buyers globally. The platform streamlines the entire wholesale sales cycle — from digital line sheets and order management to payments and buyer discovery.",
    note: "Promoted to Level III after 15 months.",
    highlights: [
      "Owned full-stack features end-to-end across the wholesale platform, from database schema design to frontend delivery.",
      "Integrated AI and LLM tooling to automate and enhance buyer-brand workflows, measurably improving connection rates and outreach efficiency.",
      "Improved test infrastructure and CI/CD reliability, significantly reducing QA bottlenecks and manual regression overhead.",
      "Contributed to platform scalability, cost reduction, and data integrity across core systems.",
      "Mentored a junior engineer through feature delivery and collaborated directly with leadership on architectural decisions.",
    ],
    stack: ["Vue.js", "PHP", "MySQL", "AWS", "Docker", "Cypress", "OpenAI", "Jenkins", "NGINX"],
  },
  {
    id: "coursehero-be",
    company: "Course Hero",
    logo: "/course_hero.jpg",
    role: "Software Engineer Intern — Backend",
    period: "Jun 2023 – Sep 2023",
    type: "Internship",
    location: "Remote",
    tagline:
      "Course Hero is an EdTech platform used by millions of students for on-demand tutoring, study resources, and academic support.",
    note: null,
    highlights: [
      "Rebuilt a synchronous document processing flow into an async, event-driven pipeline using AWS services — reducing processing time by 25%.",
      "Developed a RESTful API endpoint for cancelling in-progress document uploads, improving overall user experience.",
      "Authored documentation for the rewards system to improve cross-team knowledge transfer.",
    ],
    stack: ["AWS Step Functions", "Lambda", "SQS", "SNS", "Python", "REST APIs"],
  },
  {
    id: "coursehero-fs",
    company: "Course Hero",
    logo: "/course_hero.jpg",
    role: "Full-Stack Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    type: "Internship",
    location: "Remote",
    tagline:
      "Course Hero is an EdTech platform used by millions of students for on-demand tutoring, study resources, and academic support.",
    note: null,
    highlights: [
      "Led a team of 2 interns building a student productivity and collaboration platform from the ground up.",
      "Designed and implemented the full RESTful API and database architecture, and documented everything for handoff.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "REST APIs"],
  },
  {
    id: "uci-tutor",
    company: "UCI ICS Department",
    logo: "/uci_ics.jpg",
    role: "C++ Tutor — Intermediate Programmers",
    period: "Jan 2022 – May 2022",
    type: "Part-Time",
    location: "Irvine, CA",
    tagline:
      "UC Irvine's Donald Bren School of Information & Computer Sciences — one of the top CS programs in the US.",
    note: null,
    highlights: [
      "Facilitated 2 weekly labs of 10–20 students for a Data Structures Implementation course.",
      "Helped students debug C++ code and build intuition for core CS concepts hands-on.",
    ],
    stack: ["C++", "Data Structures", "Algorithms"],
  },
  {
    id: "ths-club",
    company: "Tesoro High School",
    logo: "/tesoro.jpg",
    role: "Founder & President — Programming Club",
    period: "Sep 2019 – Jun 2020",
    type: "Extracurricular",
    location: "Rancho Santa Margarita, CA",
    tagline: "Founded and led a programming club from scratch at Tesoro High School.",
    note: null,
    highlights: [
      "Recruited members, built the curriculum, and ran weekly sessions — helping 30+ students learn Python and core CS fundamentals.",
      "Same leadership principles as the soccer pitch: show up, communicate, earn trust.",
    ],
    stack: ["Python", "Teaching", "Leadership"],
  },
  {
    id: "dominos",
    company: "Domino's Pizza",
    logo: "/dominos.png",
    role: "Assistant Manager",
    period: "Jun 2018 – May 2022",
    type: "Part-Time",
    location: "Ladera Ranch, CA",
    tagline: "Managed daily store operations, staff scheduling, and delivery logistics.",
    note: null,
    highlights: [
      "Resolved system issues that improved operational efficiency and maintained >99% on-time delivery.",
      "Redesigned the scheduling format to reduce overhead and keep the store within budget.",
      "Handled conflict resolution and kept a team running smoothly under pressure.",
    ],
    stack: ["Operations", "Team Management", "Systems Thinking"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>("brandboom");

  return (
    <section id="experience" ref={ref} className="relative z-10 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff41] text-sm tracking-widest mb-2 uppercase">
            // 03. experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3]">
            Where I&apos;ve built
          </h2>
        </motion.div>

        <div className="space-y-3">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="card glow-border rounded-xl overflow-hidden"
            >
              {/* Header row — always visible */}
              <button
                className="w-full text-left px-6 py-5 flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-4 group"
                onClick={() => setExpanded(expanded === job.id ? null : job.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#1a1a1a] shrink-0 bg-white flex items-center justify-center">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[#e6edf3] font-semibold text-base group-hover:text-[#00ff41] transition-colors">
                      {job.company}
                    </span>
                    <span className="tag text-[0.65rem]">{job.type}</span>
                    {job.note && (
                      <span className="text-[#00cc33] text-xs">↑ {job.note}</span>
                    )}
                  </div>
                  <span className="text-[#8b949e] text-sm">{job.role}</span>
                </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[#555] text-xs font-mono">{job.period}</span>
                  <span className="text-[#333] text-xs">{job.location}</span>
                  <span className="text-[#00ff41] text-sm mt-1">
                    {expanded === job.id ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* Expandable body */}
              <AnimatePresence initial={false}>
                {expanded === job.id && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#1a1a1a] px-6 py-5 space-y-5">
                      <p className="text-[#555] text-sm italic">{job.tagline}</p>

                      <ul className="space-y-2">
                        {job.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-[#8b949e] text-sm leading-relaxed">
                            <span className="text-[#00ff41] mt-0.5 shrink-0">›</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.stack.map((s) => (
                          <span key={s} className="tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

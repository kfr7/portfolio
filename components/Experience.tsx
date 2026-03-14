"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const jobs = [
  {
    id: "brandboom",
    company: "Brandboom",
    role: "Full-Stack Engineer II → III",
    period: "Jan 2024 – Present",
    type: "Full-Time",
    location: "Los Angeles, CA",
    tagline: "B2B e-commerce platform connecting fashion brands with wholesale buyers worldwide.",
    note: "Promoted from Level II to Level III after 15 months.",
    highlights: [
      "Architected an AI-driven email automation system with inbox sync, reply detection, and AI-assisted response generation — significantly reducing manual follow-up overhead.",
      "Owned generative AI workflows that enrich brand/buyer data with industry context using OpenAI, Groq, and Perplexity — increasing buyer-brand connections 30% and outreach efficiency 20%.",
      "Engineered a parallelized Cypress test execution pipeline with Docker and NGINX, resolving a QA bottleneck and enabling stable automated regression across targeted branches.",
      "Built a data enrichment pipeline using scraping agents and external APIs, with Clay tables and custom AWS Lambda workflows for automated lead generation.",
      "Architected a custom email unsubscribe system reducing reliance on third-party services, cutting operational costs, and improving data security.",
      "Co-developed a SQL migration helper class with the CTO to optimize queries, minimize table locking, and reduce deployment overhead.",
      "Led migration of legacy jQuery components to Vue.js, improving performance and responsiveness.",
      "Led embeddable seller widgets driving measurable traffic and revenue lift — mentored a new hire through delivery.",
    ],
    stack: ["Vue.js", "PHP", "MySQL", "AWS", "Docker", "Cypress", "OpenAI", "Groq", "Jenkins", "NGINX"],
  },
  {
    id: "coursehero-be",
    company: "Course Hero",
    role: "Software Engineer Intern — Backend",
    period: "Jun 2023 – Sep 2023",
    type: "Internship",
    location: "Remote",
    tagline: "EdTech platform serving millions of students with on-demand academic help.",
    note: null,
    highlights: [
      "Rebuilt a synchronous document processing flow into an async, event-driven pipeline using AWS Step Functions, Lambda, SQS, and SNS — reducing processing time by 25%.",
      "Developed a RESTful API endpoint enabling users to cancel in-progress document uploads, improving UX and system responsiveness.",
      "Authored detailed documentation for the rewards system, improving knowledge transfer and enabling cross-functional collaboration.",
    ],
    stack: ["AWS Step Functions", "Lambda", "SQS", "SNS", "Python", "REST APIs"],
  },
  {
    id: "coursehero-fs",
    company: "Course Hero",
    role: "Full-Stack Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    type: "Internship",
    location: "Remote",
    tagline: "EdTech platform serving millions of students with on-demand academic help.",
    note: null,
    highlights: [
      "Led a team of 2 interns to build a student productivity and collaboration platform end-to-end.",
      "Planned, designed, implemented, and documented the full RESTful API and database architecture.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "REST APIs"],
  },
  {
    id: "uci-tutor",
    company: "UCI ICS Department",
    role: "C++ Tutor — Intermediate Programmers",
    period: "Jan 2022 – May 2022",
    type: "Part-Time",
    location: "Irvine, CA",
    tagline: "Facilitated weekly labs for a Data Structures Implementation course.",
    note: null,
    highlights: [
      "Ran 2 labs per week with 10–20 students, covering data structures implementation in C++.",
      "Provided hands-on debugging support and clarified complex CS concepts in accessible ways.",
    ],
    stack: ["C++", "Data Structures", "Algorithms"],
  },
  {
    id: "ths-club",
    company: "Tesoro High School",
    role: "Founder & President — Programming Club",
    period: "Sep 2019 – Jun 2020",
    type: "Extracurricular",
    location: "Rancho Santa Margarita, CA",
    tagline: "Founded and led a programming club that helped 30+ students learn core CS concepts.",
    note: null,
    highlights: [
      "Started the club from scratch — recruited members, designed curriculum, ran weekly sessions.",
      "Helped 30+ students work through Python projects and core CS fundamentals.",
      "Applied the same leadership principles I used as soccer team captain: show up, communicate, earn trust.",
    ],
    stack: ["Python", "Teaching", "Leadership"],
  },
  {
    id: "dominos",
    company: "Domino's Pizza",
    role: "Assistant Manager",
    period: "Jun 2018 – May 2022",
    type: "Part-Time",
    location: "Ladera Ranch, CA",
    tagline: "Managed daily operations, scheduling, and driver logistics.",
    note: null,
    highlights: [
      "Diagnosed and resolved computational issues in store systems that improved operational efficiency.",
      "Maintained >99% on-time delivery rate overseeing a team of drivers.",
      "Developed an improved scheduling system that kept the store consistently within budget.",
      "Mediated team disagreements and negotiated mutually beneficial outcomes between staff.",
    ],
    stack: ["Operations", "Team Management", "Systems Thinking"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>("brandboom");

  return (
    <section id="experience" ref={ref} className="relative z-10 py-28 px-6">
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

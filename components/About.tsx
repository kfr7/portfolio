"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const interests = [
  {
    emoji: "⚽",
    title: "Soccer",
    desc: "Played my whole life — pickup games, beach soccer, you name it. It's more a lifestyle than a resume item.",
  },
  {
    emoji: "🥾",
    title: "Trail Runner",
    desc: "Give me a trail in the Angeles National Forest and I'm at peace. There's something about the silence of a long hike that resets the brain — great for debugging life's toughest problems.",
  },
  {
    emoji: "🌊",
    title: "Beach Soccer",
    desc: "Weekend 'gentleman's soccer' at the beach. No refs, no drama — just grown adults sprinting barefoot in sand, taking it way too seriously, and loving every second.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative z-10 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00ff41] text-sm tracking-widest mb-2 uppercase">
            // 01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3]">
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-[#8b949e] leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-[#e6edf3] font-semibold">Kian Ranjbar</span> — a
              Full-Stack Engineer based in{" "}
              <span className="text-[#00cc33]">Los Angeles</span> who loves
              building things that actually matter. I graduated from{" "}
              <span className="text-[#e6edf3]">UC Irvine</span> with a B.S. in
              Computer Science (Information Management & Data Analytics), GPA{" "}
              <span className="text-[#00ff41]">3.992</span> — then immediately
              jumped into the deep end of a fast-paced startup.
            </p>
            <p>
              Right now I&apos;m a <span className="text-[#e6edf3]">Full-Stack Engineer III</span>{" "}
              at Brandboom, where I&apos;ve shipped everything from AI-powered email
              automation to parallelized CI test pipelines. I got promoted after
              15 months and I&apos;m still accelerating.
            </p>
            <p>
              I speak English and Spanish fluently — and I&apos;m equally comfortable
              talking to a database as I am talking to a non-technical
              stakeholder. I believe the best engineers are translators: between
              product and engineering, between today&apos;s code and tomorrow&apos;s scale.
            </p>
            <p>
              Off the keyboard, I&apos;m either chasing a soccer ball, hiking a
              trail, or losing sleep over an interesting side project.
            </p>

            {/* Education card */}
            <div className="card p-5 mt-4 glow-border">
              <p className="text-[#555] text-xs tracking-widest mb-2 uppercase">
                $ cat education.txt
              </p>
              <p className="text-[#00ff41] font-semibold">
                University of California, Irvine
              </p>
              <p className="text-[#c9d1d9] text-sm">
                B.S. Computer Science — Information Management & Data Analytics
              </p>
              <p className="text-[#555] text-sm">Sep 2020 – Dec 2023</p>
              <p className="text-[#00cc33] text-sm mt-1">GPA: 3.992</p>
            </div>
          </motion.div>

          {/* Right: photo + interest cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Headshot */}
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00ff41]/20 to-transparent blur-xl" />
              <div className="relative rounded-lg overflow-hidden border border-[#00ff41]/20">
                <Image
                  src="/headshot.jpeg"
                  alt="Kian Ranjbar"
                  width={400}
                  height={400}
                  className="w-full object-cover transition-all duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Interest cards */}
            <div className="grid gap-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card p-4 flex gap-4 group cursor-default"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="text-[#e6edf3] text-sm font-semibold group-hover:text-[#00ff41] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[#555] text-xs leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <div className="rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-colors">
            <Image
              src="/brazil-juggling.jpeg"
              alt="Soccer"
              width={300}
              height={200}
              className="w-full h-40 object-cover transition-all duration-300 hover:scale-105"
            />
            <p className="text-center text-[#555] text-xs py-2">
              ⚽ The beautiful game
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-colors">
            <Image
              src="/hiking.JPG"
              alt="Hiking"
              width={300}
              height={200}
              className="w-full h-40 object-cover transition-all duration-300 hover:scale-105"
            />
            <p className="text-center text-[#555] text-xs py-2">
              🥾 Trail therapy
            </p>
          </div>
        </motion.div>

        {/* Anna's Angels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <p className="text-[#333] text-xs tracking-widest uppercase mb-4 text-center">// something bigger</p>
          <div className="card p-5 glow-border">
            <p className="text-[#8b949e] text-sm leading-relaxed mb-5">
              Long before I wrote my first line of code, I co-founded{" "}
              <span className="text-[#e6edf3]">Anna&apos;s Angels</span> — a volunteer
              initiative that organizes gift drives and holiday lunches for children
              at a local orphanage. Started with my mom in 2014, still going.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a]">
                <Image
                  src="/orphanage1.jpg"
                  alt="Anna's Angels gift drive"
                  width={300}
                  height={200}
                  className="w-full h-36 object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a]">
                <Image
                  src="/orphanage2.jpg"
                  alt="Anna's Angels — kids after lunch"
                  width={300}
                  height={200}
                  className="w-full h-36 object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";


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
              at Brandboom — a B2B wholesale marketplace — where I own features
              end-to-end, from schema design to frontend delivery. I&apos;ve shipped
              AI-powered workflows, rebuilt CI pipelines, and mentored junior engineers.
            </p>
            <p>
              I&apos;m equally comfortable talking to a database as I am talking to a
              non-technical stakeholder. I believe the best engineers are
              translators: between product and engineering, between today&apos;s code
              and tomorrow&apos;s scale.
            </p>
            <p>
              When I&apos;m not at the computer, I&apos;m probably on a soccer field or
              out finding a new trail — nature has a way of clearing the head
              better than anything else.
            </p>

            {/* Education card */}
            <div className="card p-5 mt-4 glow-border">
              <p className="text-[#888] text-xs tracking-widest mb-2 uppercase">
                $ cat education.txt
              </p>
              <p className="text-[#00ff41] font-semibold">
                University of California, Irvine
              </p>
              <p className="text-[#c9d1d9] text-sm">
                B.S. Computer Science — Information Management & Data Analytics
              </p>
              <p className="text-[#888] text-sm">Sep 2020 – Dec 2023</p>
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

            {/* Soccer + Hiking photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-colors">
                <Image
                  src="/brazil-juggling.jpeg"
                  alt="Soccer"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-all duration-300 hover:scale-105"
                />
                <p className="text-center text-[#888] text-xs py-2">⚽ The beautiful game</p>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#00ff41]/30 transition-colors">
                <Image
                  src="/hiking.JPG"
                  alt="Hiking"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-all duration-300 hover:scale-105"
                />
                <p className="text-center text-[#888] text-xs py-2">🥾 Trail therapy</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Anna's Angels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <p className="text-[#888] text-xs tracking-widest uppercase mb-4 text-center">// something bigger</p>
          <div className="card p-5 glow-border">
            <p className="text-[#8b949e] text-sm leading-relaxed mb-5">
              Long before I wrote my first line of code, I co-founded{" "}
              <span className="text-[#e6edf3]">Anna&apos;s Angels</span> — a volunteer
              initiative that organizes gift drives and holiday lunches for children
              across orphanages in Tijuana, Mexico. Started with my mom in 2014, still going.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a]">
                <Image
                  src="/orphanage1.jpg"
                  alt="Anna's Angels gift drive"
                  width={300}
                  height={200}
                  className="w-full h-52 object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a]">
                <Image
                  src="/orphanage2.jpg"
                  alt="Anna's Angels — kids after lunch"
                  width={300}
                  height={200}
                  className="w-full h-52 object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

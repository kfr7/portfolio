"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Zone = 0 | 1 | 2; // left | center | right
type Phase = "idle" | "ready" | "shooting" | "result";

const ZONES: { label: string; x: string }[] = [
  { label: "Left", x: "17%" },
  { label: "Centre", x: "50%" },
  { label: "Right", x: "83%" },
];

const MAX_SHOTS = 5;

function getKeeperZone(): Zone {
  return (Math.floor(Math.random() * 3)) as Zone;
}

export default function SoccerGame() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [phase, setPhase] = useState<Phase>("idle");
  const [shots, setShots] = useState(0);
  const [score, setScore] = useState(0);
  const [keeperZone, setKeeperZone] = useState<Zone>(1);
  const [shotZone, setShotZone] = useState<Zone | null>(null);
  const [resultMsg, setResultMsg] = useState("");
  const [history, setHistory] = useState<Array<{ shot: Zone; keeper: Zone; goal: boolean }>>([]);

  const startGame = () => {
    setPhase("ready");
    setShots(0);
    setScore(0);
    setShotZone(null);
    setHistory([]);
    setKeeperZone(getKeeperZone());
  };

  const shoot = useCallback(
    (zone: Zone) => {
      if (phase !== "ready") return;

      const keeper = getKeeperZone();
      const isGoal = zone !== keeper;

      setShotZone(zone);
      setKeeperZone(keeper);
      setPhase("shooting");

      setTimeout(() => {
        const newShots = shots + 1;
        const newScore = isGoal ? score + 1 : score;

        setHistory((h) => [...h, { shot: zone, keeper, goal: isGoal }]);
        setResultMsg(
          isGoal
            ? ["GOAL!", "NET BUSTER!", "TOP BINS!", "UNSTOPPABLE!"][Math.floor(Math.random() * 4)]
            : ["SAVED!", "Keeper gets it!", "Off the post…", "Too predictable!"][
                Math.floor(Math.random() * 4)
              ]
        );
        setScore(newScore);
        setShots(newShots);
        setPhase("result");

        setTimeout(() => {
          if (newShots >= MAX_SHOTS) {
            setPhase("idle");
          } else {
            setKeeperZone(getKeeperZone());
            setShotZone(null);
            setPhase("ready");
          }
        }, 1500);
      }, 700);
    },
    [phase, shots, score]
  );

  const isGameOver = phase === "idle" && shots > 0;
  const isPlaying = phase === "ready" || phase === "shooting" || phase === "result";

  return (
    <section id="game" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-[#00ff41] text-sm tracking-widest mb-2 uppercase">
            // 04. take a break
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">
            Penalty Shootout
          </h2>
          <p className="text-[#555] text-sm">
            I played soccer my whole life. Now you play against me.{" "}
            <span className="text-[#00cc33]">{MAX_SHOTS} shots. Beat the keeper.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="card glow-border rounded-xl overflow-hidden p-6"
        >
          {/* Score bar */}
          {isPlaying && (
            <div className="flex justify-between items-center mb-5 text-sm">
              <span className="text-[#555]">
                Shot{" "}
                <span className="text-[#00ff41]">
                  {Math.min(shots + 1, MAX_SHOTS)}
                </span>
                /{MAX_SHOTS}
              </span>
              <span className="text-[#00ff41] font-bold text-lg glow-green">
                {score} / {shots} ⚽
              </span>
              <div className="flex gap-1">
                {history.map((h, i) => (
                  <span key={i} className={h.goal ? "text-[#00ff41]" : "text-[#ff5555]"}>
                    {h.goal ? "✓" : "✗"}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Goal visualization */}
          <div className="relative bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] mb-6 overflow-hidden select-none"
               style={{ height: 200 }}>

            {/* Goal frame */}
            <div className="absolute top-4 left-[8%] right-[8%] h-[120px] border-2 border-[#00ff41]/60 rounded-sm"
                 style={{ boxShadow: "0 0 12px rgba(0,255,65,0.15)" }} />

            {/* Goal net lines */}
            <svg className="absolute top-4 left-[8%] right-[8%]" style={{ width: "84%", height: 120 }}>
              {[1, 2, 3, 4].map((n) => (
                <line key={`v${n}`} x1={`${n * 20}%`} y1="0" x2={`${n * 20}%`} y2="100%"
                      stroke="rgba(0,255,65,0.1)" strokeWidth="1" />
              ))}
              {[1, 2, 3].map((n) => (
                <line key={`h${n}`} x1="0" y1={`${n * 25}%`} x2="100%" y2={`${n * 25}%`}
                      stroke="rgba(0,255,65,0.1)" strokeWidth="1" />
              ))}
            </svg>

            {/* Zone dividers inside goal */}
            <div className="absolute top-4 left-[8%] right-[8%] h-[120px] flex">
              {ZONES.map((z, i) => (
                <div key={i} className="flex-1 border-r border-[#00ff41]/10 last:border-0" />
              ))}
            </div>

            {/* Keeper */}
            <motion.div
              animate={{
                left:
                  keeperZone === 0
                    ? "12%"
                    : keeperZone === 2
                    ? "calc(84% - 40px)"
                    : "calc(50% - 20px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute"
              style={{ top: 60, width: 40, height: 50 }}
            >
              <div className="w-full h-full bg-[#00ff41]/20 border border-[#00ff41]/60 rounded-sm flex items-center justify-center text-lg">
                🧤
              </div>
            </motion.div>

            {/* Ball */}
            <AnimatePresence>
              {shotZone !== null && (
                <motion.div
                  key="ball"
                  initial={{ bottom: 20, left: "50%", x: "-50%", scale: 1, opacity: 1 }}
                  animate={{
                    bottom: 80,
                    left:
                      shotZone === 0
                        ? "20%"
                        : shotZone === 2
                        ? "75%"
                        : "50%",
                    x: "-50%",
                    scale: 0.5,
                    opacity: 0.7,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute text-2xl"
                  style={{ bottom: 20 }}
                >
                  ⚽
                </motion.div>
              )}
            </AnimatePresence>

            {/* Default ball position */}
            {shotZone === null && phase !== "idle" && (
              <div className="absolute text-2xl" style={{ bottom: 16, left: "50%", transform: "translateX(-50%)" }}>
                ⚽
              </div>
            )}

            {/* Result overlay */}
            <AnimatePresence>
              {phase === "result" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                >
                  <span
                    className={`text-3xl font-black tracking-wider ${
                      resultMsg.includes("GOAL") ||
                      resultMsg.includes("BUSTER") ||
                      resultMsg.includes("BINS") ||
                      resultMsg.includes("UNSTOPPABLE")
                        ? "text-[#00ff41] glow-green"
                        : "text-[#ff5555]"
                    }`}
                  >
                    {resultMsg}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shoot buttons */}
          {phase === "ready" && (
            <div>
              <p className="text-center text-[#555] text-xs mb-3 tracking-wider uppercase">
                Pick your corner
              </p>
              <div className="grid grid-cols-3 gap-3">
                {ZONES.map((z, i) => (
                  <button
                    key={i}
                    onClick={() => shoot(i as Zone)}
                    className="py-3 rounded border border-[#00ff41]/30 text-[#00cc33] text-sm font-semibold
                               hover:bg-[#00ff41]/10 hover:border-[#00ff41]/60 active:scale-95
                               transition-all duration-150"
                  >
                    {z.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Start / Game over */}
          {(phase === "idle") && (
            <div className="text-center space-y-4">
              {isGameOver && (
                <div className="mb-4">
                  <p className="text-[#e6edf3] text-2xl font-bold mb-1">
                    {score === MAX_SHOTS
                      ? "Perfect score! 🏆"
                      : score >= 3
                      ? "Solid shooting! ⚽"
                      : "The keeper won this one 🧤"}
                  </p>
                  <p className="text-[#555] text-sm">
                    You scored{" "}
                    <span className="text-[#00ff41] font-bold">{score}</span> out of{" "}
                    {MAX_SHOTS} — {Math.round((score / MAX_SHOTS) * 100)}% conversion rate.
                  </p>
                  <div className="flex justify-center gap-2 mt-3">
                    {history.map((h, i) => (
                      <span key={i} className={`text-xl ${h.goal ? "text-[#00ff41]" : "text-[#ff5555]"}`}>
                        {h.goal ? "⚽" : "🧤"}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={startGame}
                className="bg-[#00ff41] text-[#0a0a0a] font-bold px-8 py-3 rounded text-sm tracking-wider
                           hover:bg-[#00cc33] active:scale-95 transition-all"
              >
                {isGameOver ? "Play Again" : "Start Shooting"}
              </button>
            </div>
          )}

          {phase === "shooting" && (
            <div className="text-center text-[#555] text-sm animate-pulse py-2">
              Ball in flight…
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

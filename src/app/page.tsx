"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Layers, Zap, MessageSquare } from "lucide-react";

const projects = ["TokenTap", "AoE2WAR", "Wallygotchi", "VPSSentry", "Traffic", "TMail"];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,184,124,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%)]" />

      <header className="relative z-10 flex items-center justify-between px-8 py-7">
        <div className="tracking-[0.32em] text-xl font-semibold">ASCEND <span className="text-neutral-400">AI</span></div>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.18em] text-neutral-300">
          <a>Systems</a>
          <a>Ecosystem</a>
          <a>Signal</a>
          <a>About</a>
        </nav>
        <button className="rounded-xl border border-white/20 px-5 py-3 text-xs tracking-[0.16em] hover:bg-white hover:text-black transition">
          START
        </button>
      </header>

      <section className="relative z-10 grid lg:grid-cols-2 gap-12 px-8 pt-20 pb-28 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-[-0.06em]">
            OPERATIONAL<br />
            INTELLIGENCE<br />
            <span className="text-[#b8aa92]">FOR MODERN</span><br />
            BUSINESS.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-neutral-300 leading-8">
            Most businesses are bleeding time through bad information flow.
            Ascend AI builds systems that tighten operations, automate repetitive work,
            and surface hidden leverage inside your business.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-white text-black px-6 py-4 text-sm font-semibold flex items-center gap-3">
              OPEN CONSOLE <ArrowRight size={18} />
            </button>
            <button className="rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold flex items-center gap-3">
              OUR SYSTEMS <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative min-h-[460px] hidden lg:block">
          <div className="absolute left-1/2 top-0 h-72 w-px bg-gradient-to-b from-white to-transparent shadow-[0_0_40px_rgba(255,255,255,0.9)]" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-neutral-700 to-black rotate-45 shadow-[0_0_90px_rgba(212,184,124,0.25)]" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[520px] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-white/10 py-10">
        <p className="text-center text-xs tracking-[0.35em] text-neutral-500 mb-8">BUILT BY OPERATORS</p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-8">
          {projects.map((p) => (
            <button key={p} className="text-neutral-500 hover:text-[#d6c08c] transition tracking-[0.12em] text-sm">
              {p}
            </button>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.05em]">
            WE TURN COMPLEXITY<br />
            INTO <span className="text-[#b8aa92]">CLARITY.</span>
          </h2>
          <p className="text-neutral-300 text-lg leading-8">
            We help businesses capture value leaking through outdated systems,
            manual work, and disconnected data.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            ["AUTOMATE WHAT DRAINS YOU", Zap],
            ["SEE WHAT OTHERS MISS", Eye],
            ["INTEGRATE & STREAMLINE", Layers],
            ["ASCEND CONSOLE", MessageSquare],
          ].map(([title, Icon]: any) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 min-h-56 hover:bg-white/[0.07] transition">
              <Icon className="text-[#d6c08c] mb-8" size={26} />
              <h3 className="font-bold tracking-[-0.03em] text-lg">{title}</h3>
              <p className="mt-4 text-sm text-neutral-400 leading-6">
                Private intelligence systems that reduce drag, expose signals, and tighten operations.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-neutral-500 mb-4">ASCEND CONSOLE</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em]">Ready to find the leak?</h2>
            <p className="mt-3 text-neutral-400">Ask Ascend AI what it could build for your business.</p>
          </div>
          <button className="rounded-xl bg-white text-black px-7 py-4 font-semibold flex items-center gap-3">
            START SIGNAL <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Layers, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const projects = ["TokenTap", "AoE2WAR", "Traffic", "VPSSentry", "TMail", "Pulse"];

const cards = [
  {
    title: "AUTOMATE WHAT DRAINS YOU",
    body: "Replace repetitive admin, reporting, and follow-up work with tight private workflows that actually fit the business.",
    icon: Zap,
  },
  {
    title: "SEE WHAT OTHERS MISS",
    body: "Turn scattered logs, emails, visits, and operator notes into visible signal before problems become expensive.",
    icon: Eye,
  },
  {
    title: "INTEGRATE THE STACK",
    body: "Connect the tools already doing the work so the business moves like one system instead of five loose tabs.",
    icon: Layers,
  },
  {
    title: "BUILD THE CONSOLE",
    body: "Give owners and operators one command surface for decisions, alerts, automations, and next actions.",
    icon: MessageSquare,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(214,192,140,0.18),transparent_34%),radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <div className="text-lg font-semibold tracking-[0.34em] sm:text-xl">
          ASCEND <span className="text-neutral-400">AI</span>
        </div>

        <nav className="hidden gap-8 text-xs tracking-[0.18em] text-neutral-300 md:flex">
          <a href="#systems" className="transition hover:text-white">Systems</a>
          <a href="#ecosystem" className="transition hover:text-white">Ecosystem</a>
          <a href="#signal" className="transition hover:text-white">Signal</a>
          <a href="#about" className="transition hover:text-white">About</a>
        </nav>

        <a
          href="#signal"
          className="rounded-xl border border-white/20 px-4 py-3 text-xs tracking-[0.16em] transition hover:bg-white hover:text-black sm:px-5"
        >
          START
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.32em] text-[#d6c08c]/80">
            PRIVATE SYSTEMS · OPERATOR INTELLIGENCE
          </p>

          <h1 className="text-[3.65rem] font-bold leading-[0.86] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
            OPERATIONAL
            <br />
            INTELLIGENCE
            <br />
            <span className="text-[#b8aa92]">FOR MODERN</span>
            <br />
            BUSINESS.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
            Most businesses bleed time through bad information flow. Ascend AI builds private systems that tighten operations,
            automate repetitive work, and surface hidden leverage inside your business.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#signal"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#d6c08c]"
            >
              OPEN CONSOLE <ArrowRight size={18} />
            </a>
            <a
              href="#systems"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold transition hover:border-white/45 hover:bg-white/[0.06]"
            >
              OUR SYSTEMS <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.965 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px] lg:max-w-none"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(214,192,140,0.16),transparent_58%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.035] shadow-[0_0_120px_rgba(214,192,140,0.12)]">
            <Image
              src="/ascend-pyramid-hero.png"
              alt="Black pyramid lit by a white vertical signal beam on a dark brick floor"
              width={1536}
              height={1536}
              priority
              className="aspect-square h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.36))]" />
          </div>
        </motion.div>
      </section>

      <section id="ecosystem" className="relative z-10 border-y border-white/10 py-10">
        <p className="mb-8 text-center text-xs tracking-[0.35em] text-neutral-500">BUILT BY OPERATORS</p>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-8 md:grid-cols-6">
          {projects.map((project) => (
            <a
              key={project}
              href="#systems"
              className="text-center text-sm tracking-[0.12em] text-neutral-500 transition hover:text-[#d6c08c]"
            >
              {project}
            </a>
          ))}
        </div>
      </section>

      <section id="systems" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-bold tracking-[-0.055em] md:text-5xl">
            WE TURN COMPLEXITY
            <br />
            INTO <span className="text-[#b8aa92]">CLARITY.</span>
          </h2>
          <p className="max-w-xl text-lg leading-8 text-neutral-300 md:ml-auto">
            We help businesses capture value leaking through outdated tools, manual work, weak follow-up, and disconnected data.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {cards.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="min-h-60 rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d6c08c]/35 hover:bg-white/[0.07]"
            >
              <Icon className="mb-8 text-[#d6c08c]" size={26} />
              <h3 className="text-lg font-bold tracking-[-0.03em]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-5 px-5 pb-10 sm:px-8 md:grid-cols-3">
        {[
          ["01", "Map the leaks", "Find the repeated decisions, stale reports, invisible bottlenecks, and expensive handoffs."],
          ["02", "Build the system", "Ship the smallest useful automation or console first, then tighten it with real operator feedback."],
          ["03", "Compound the signal", "Connect the workflow to analytics, alerts, campaigns, and next actions so the system keeps learning."],
        ].map(([num, title, body]) => (
          <div key={num} className="rounded-2xl border border-white/10 bg-black/40 p-7">
            <p className="text-xs tracking-[0.3em] text-[#d6c08c]/70">{num}</p>
            <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-400">{body}</p>
          </div>
        ))}
      </section>

      <section id="signal" className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">ASCEND CONSOLE</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em]">Ready to find the leak?</h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              Start with one workflow, one dashboard, or one ugly operational bottleneck. We turn it into leverage.
            </p>
          </div>
          <a
            href="mailto:tony@ascendai.one?subject=Ascend%20AI%20Signal"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-[#d6c08c]"
          >
            START SIGNAL <ShieldCheck size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
